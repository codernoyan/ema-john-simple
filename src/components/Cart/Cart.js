import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Items {cart.length}</p>
            <h1>hello cart</h1>
        </div>
    );
};

export default Cart;