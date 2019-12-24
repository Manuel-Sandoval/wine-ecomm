import React, { Component } from 'react';
import Container from '../../ui/Container/Container';
import CartItems from '../../components/CartItems/CartItems';
import Title from '../../components/Title/Title';
import Item from '../../ui/Item/Item';
import {Button, Typography, Divider } from '@material-ui/core';
import styles from './Cart.module.scss';

class Cart extends Component {
    public render() {
        return (
            <div>
                <Title title='Cart'/>
                <Container direction='column' justify='center'>
                    <Item xs={12}>
                        <CartItems/>
                    </Item>
                </Container>
                <Container className={styles.Resume}>
                    <Item xs={7}>
                        <Button variant='outlined'>Continue Shopping</Button>
                    </Item>
                    <Item xs={3}>
                        <Typography variant='h5'>Cart Totals</Typography>
                        <Divider/>
                        <div className={styles.FormContainer}>
                            <Typography><strong>Subtotal:</strong></Typography>
                            <Typography>$ 100</Typography>
                            <Typography><strong>Taxes:</strong></Typography>
                            <Typography>$ 20</Typography>
                            <Typography><strong>Total:</strong></Typography>
                            <Typography>$ 120</Typography>
                        </div>
                        <Button variant='contained'>Proceed to checkout</Button>
                    </Item>
                </Container>
            </div>
        );
    }
}

export default Cart;