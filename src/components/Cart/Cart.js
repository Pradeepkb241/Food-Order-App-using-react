import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart(props) {

    const cartItems = <ul className={classes['cart-items']}>{[{ id: 'c1', name: 'chicken biryani', amount: 2, price: 299 }].map(item => <li>{item.name}</li>)}</ul>
    return (
        <Modal onClose ={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>799</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
