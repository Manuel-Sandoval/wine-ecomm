import React, {SFC} from 'react';
import CartItem from './CartItem/CartItem';
import IProps from './IProps';
import Shop from '@material-ui/icons/Shop';
import { Typography } from '@material-ui/core';
import styles from './CartItems.module.scss';

const CartItems: SFC<IProps> = (props) => {


    let cartItems = (
        <div className={styles.EmptyCartContainer}>
            <div>
                <Shop className={styles.EmptyCartIcon}/>
            </div>
            <Typography variant='h2'>Your cart is empty!</Typography>
        </div>
    );

    if (props.products.length > 0) {
        cartItems = (
        <div>
            {props.products.map(w => {
                return <CartItem key={w.wine.id} wine={w.wine} quantity={w.quantity}/>
            })}
        </div>
        );
    }
    return (
        <div>
            {cartItems}
        </div>
    );

}

export default CartItems;