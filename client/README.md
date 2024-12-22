# E-Commerce Store with Stripe Integration

This is a simple eCommerce store built with React, where users can browse products, add them to the cart, and proceed to checkout using Stripe for payment.

## Features

- Browse products fetched from an API.
- Add products to the shopping cart.
- Proceed to checkout using Stripe for secure payments
- View order summary before finalizing the purchase.
- Backend API using Express to serve product data.

## API Used

- Products API: Fetches product data (name, description, price, image) from:
  https://api.escuelajs.co/api/v1/products.

The backend server, powered by Express, interacts with Stripe for processing payments and serves the product data.

## Installation

1. Clone the repository:

   ```
   Clone the repository:
   ```

2. Install dependencies:

   Frontend (React):

   Navigate to the client directory (or your frontend folder) and run:

   ```
   cd client
   npm install
   ```

   Backend (Express API):

   Navigate to the api directory (or your backend folder) and run:

   ```
   cd api
   npm install
   ```

   This will install all necessary dependencies for both the frontend and backend.

3. Set up environment variables:

   Frontend:

   In your `.env` file in the frontend directory (e.g., /client), add your Stripe keys:

   ```
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your-publishable-key
   ```

   Backend:

   In the `.env` file in the backend directory (e.g., /api), add your Stripe secret key:

   ```
   STRIPE_SECRET_KEY=your-secret-key
   ```

   Make sure you replace your-publishable-key and your-secret-key with your actual Stripe API keys, which you can obtain from your Stripe account.

4. Start the app:

   ~Frontend~:

   To start the frontend React app, run:

   ```
   cd client
   npm start
   ```

   The frontend should now be running on http://localhost:5173/

   Backend:

   To start the Express API server, run:

   ```
   cd api
   npm start
   ```

   The backend API server should now be running on http://localhost:4000.
