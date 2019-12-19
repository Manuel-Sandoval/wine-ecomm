import React, {SFC, ChangeEvent} from 'react';
import ICart, { ICartProps as IProps } from './IProps';
import styles from './CartItem.module.scss'
import Remove from '@material-ui/icons/Close';
import Plus from '@material-ui/icons/Add';
import Minus from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';
import {deleteItem, changeQty, sumQty, reduceQty} from '../../../store/cart/CartActions';
import { connect } from 'react-redux';

const CartItem: SFC<IProps> = props => {

    const totalPrice = (props.quantity * props.wine.price).toFixed(2);

    const addQuanityHandler = () => {
        props.sumQty(props);
    }

    const reduceQuanityHandler = () => {
        if (props.quantity > 1) {
            props.reduceQty(props);
        }
    }

    const quantityHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = Number(event.currentTarget.value);

        if (!isNaN(value) && Number.isInteger(value) && value > 0) {
            props.changeQty(props, value);
        }

    }

    return (
        
            <div className={styles.CartItem}>
                <div>
                    <h2>{props.wine.title}</h2>
                </div>
                <div className={styles.ItemInfo}>
                    <div className={styles.ProductImage}>
                        <img src={props.wine.image} alt={props.wine.image}/>
                    </div>
                    <div>
                        <span><strong>Price:</strong> {props.wine.price.toFixed(2)}$</span>
                    </div>
                    <div className={styles.QtyButtons}>
                        <IconButton onClick={reduceQuanityHandler}>
                            <Minus/>
                        </IconButton>
                        <input type='text' value={props.quantity} className={styles.Qty} onChange={quantityHandler}/>
                        <IconButton onClick={addQuanityHandler}>
                            <Plus/>
                        </IconButton>
                    </div>
                    <div>
                        <span><strong>Total:</strong> {totalPrice}$</span>
                    </div>
                    <div >
                        <button className={styles.Remove} onClick={() => props.removeItem(props)}>
                            <Remove />
                        </button>
                    </div>
                </div>
            </div>

    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeItem: (cartItem: ICart) => dispatch(deleteItem(cartItem)),
        changeQty: (cartItem: ICart, qty: number) => dispatch(changeQty(cartItem, qty)),
        sumQty: (cartItem: ICart) => dispatch(sumQty(cartItem)),
        reduceQty: (cartItem: ICart) => dispatch(reduceQty(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);