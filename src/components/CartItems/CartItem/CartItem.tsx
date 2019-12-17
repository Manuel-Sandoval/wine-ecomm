import React, {SFC} from 'react';
import IProps from './IProps';
import { Paper } from '@material-ui/core';
import styles from './CartItem.module.scss'

const CartItem: SFC = props => {
    return (
        <Paper className={styles.ItemInfo}>
            <div className={styles.ProductImage}>
                
            </div>

        </Paper>
    );
}

export default CartItem;