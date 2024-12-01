const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QRINRLwnSvfXNcbYatW3y68UrJLSvSSAiZrXuhiu71RqEFLovg1iJXiy3EtREiEYu0rkIzlEKPQcRo5p0gKbjzc00HjE4wFS1')
const app = express();
const port = 4000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());


const priceMapping = {
    'prod_RJwMQ5nKmvp7nt': 'price_1QRITJLwnSvfXNcbtLj94fVz', 
    
}; 

app.post("/checkout", async (req, res) => {
    // console.log(req.body.products);

    try {
        const products = req.body.products;
        console.log(products);
        const lineItems = [];

        // const lineItems = products.map((product) => {
        //     const priceId = priceMapping[product.id];

        //     if (!priceId) {
        //         throw new Error(`No price ID found for product: ${product.id}`)
        //     }

        //     return {
        //         price: 'price_1QRITJLwnSvfXNcbtLj94fVz',
        //         quantity: product.quantity
        //     }
        // })

        products.forEach((product) => {
            if (!product.id || !product.quantity) {
                return res.status(400).send({error: 'Product is missing price or quantity'})
            } 

            // lineItems.push({
            //     price_data: {
            //         currency: "usd",
            //         product_data: {
            //             name: product.title,
            //         },
            //         unit_amount: Math.round(product.price * 100)
            //     },
            //     quantity: product.quantity,
            // });

            lineItems.push({
                price: 'price_1QRITJLwnSvfXNcbtLj94fVz',
                quantity: product.quantity
            });
        });

        

        const session = await stripe.checkout.sessions.create({
            // shipping_address_collection: {allowed_countries: ['US', 'CA', 'GH']},
            payment_method_types: ['card'],
            mode: "payment",
            line_items: lineItems,
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        // res.send({ clientSecret: session.client_secret});
        res.send(JSON.stringify({
            url: session.url
        }))

        // Check if there are items in the cart
        if (!products || products.length === 0) {
            return res.status(400).send({ error: 'No items in the cart' });
        }

    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: 'Failed to create checkout session' });
    }
    
});



// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



/// npm start