import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'white',
                backgroundColor: '#a83131',
                padding : '17px'
            }}
        >
            <span className="logo">Food Ordering Portal</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <span className="cartCount"><i class="fa-solid fa-cart-shopping"></i>{items.length}</span>
            </div>
        </div>
    );
};

export default Navbar;


