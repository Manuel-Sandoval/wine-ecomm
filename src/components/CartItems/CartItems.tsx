import React, {SFC} from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import { IApplicationState } from '../../store/Store';
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

const mapStateToProps = (store: IApplicationState) => {
    return {
        products: store.cart.products
    }
}


export default connect(mapStateToProps)(CartItems);