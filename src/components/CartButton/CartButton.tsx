import React, {SFC} from 'react';

import {IconButton} from '@material-ui/core'
import CartIcon from '@material-ui/icons/ShoppingCart';
import '../../styles/IconButtons.scss'

const CartButton : SFC = () => {

    return (
        <IconButton className='icon-default'>
            <CartIcon/>
        </IconButton>
    );
}

export default CartButton;