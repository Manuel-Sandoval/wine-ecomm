import React, { Component } from 'react';
import Container from '../../ui/Container/Container';
import CartItems from '../../components/CartItems/CartItems';
import Title from '../../components/Title/Title';

class Cart extends Component {
    public render() {
        return (
            <div>
                <Title title='Cart'/>
                <Container direction='column' alignItems='stretch'>
                    <CartItems/>
                </Container>
            </div>
        );
    }
}

export default Cart;