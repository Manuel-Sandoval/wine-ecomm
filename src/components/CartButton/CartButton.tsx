import React, {SFC} from 'react';

import {IconButton} from '@material-ui/core'
import CartIcon from '@material-ui/icons/ShoppingCart';
import '../../styles/IconButtons.scss'
import IProps from './IProps'
import { Link } from 'react-router-dom';

const CartButton : SFC<IProps> = (props) => {

    return (
        <Link to={props.to}>
            <IconButton className='icon-default'>
                
                <CartIcon/>
            </IconButton>
        </Link>
    );
}

export default CartButton;