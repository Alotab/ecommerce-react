
import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
// import { loadStripe } from "@stripe/stripe-js";



const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };


  const handlePayments = async (e) => {
    // e.preventDefault()
    console.log('Cart Products: ', products);
  
    try {
      const response = await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({products: products})
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching orders: ${response.statusText}`);
      }
  
      const responseJson = await response.json();
  
      if (responseJson.url) {
        window.location.assign(responseJson.url)
      }
  
    } catch (err) {
      console.error("Error handling payment:", err);
    }
  };


  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item, idx) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayments}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;