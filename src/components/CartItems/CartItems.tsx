import React, {SFC} from 'react';
import CartItem from './CartItem/CartItem';
import IProps from './IProps';

const CartItems: SFC<IProps> = (props) => {

    const cartItems = props.products.map(w => {
        return <CartItem key={w.wine.id} wine={w.wine} quantity={w.quantity}/>
    });

    return (
        <div>
            {cartItems}
        </div>
    );

}

export default CartItems;