import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Outlet, Link  } from "react-router-dom";
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'


const stripePromise = loadStripe('pk_test_51QRINRLwnSvfXNcbUGiFt7Ov4tpV8sOMcFIzT2UJ3phtcsiKmAAQ0XCXxgHGge7oI8YtUrzvZRxvtLQJ7KOwGy6d00y257bwIo')


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
                <div className="item">
                    <img src="/img/en.png" alt="" />
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Men</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Children</Link>
                </div>
            </div>

            <div className='center'>
                <Link className='link' to="/">REACT-STORE</Link>
            </div>

            <div className='right'>
                <div className='item'>
                    <Link className='link' to="/">Homepage</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Stores</Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <PersonIcon />
                    <FavoriteBorderOutlinedIcon />
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
        <Elements stripe={stripePromise}> 
            {open && <Cart />}
        </Elements>
       
    </div>
  );
};

export default Navbar
