import React, { Component } from 'react';
import { Typography, Paper } from '@material-ui/core';
import Container from '../../ui/Container/Container';
import CartItems from '../../components/CartItems/CartItems';

class Cart extends Component {
    public render() {
        return (
            <div>
                <div>
                    <Typography variant='h2'>Cart</Typography>
                </div>
                <Container direction='column' alignItems='stretch'>
                    <CartItems/>
                </Container>
            </div>
        );
    }
}

export default Cart;