import React, { Component } from 'react';
import Container from '../../ui/Container/Container';
import CartItems from '../../components/CartItems/CartItems';
import Title from '../../components/Title/Title';
import Item from '../../ui/Item/Item';
import {Button, Typography, Divider } from '@material-ui/core';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import IProps from './ICartProps';
import { IApplicationState } from '../../store/Store';

class Cart extends Component<IProps> {
    public render() {
        return (
            <div>
                <Title title='Cart'/>
                <Container direction='column' justify='center'>
                    <Item xs={12}>
                        <CartItems products={this.props.products}/>
                    </Item>
                </Container>
                <Container className={styles.Resume}>
                    <Item xs={7}>
                    <Link to='/shop'>
                        <Button variant='outlined'>Continue Shopping</Button>
                    </Link>
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
                        <Button variant='contained'>
                            Proceed to checkout
                        </Button>
                    </Item>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (store: IApplicationState) => {
    return {
        products: store.cart.products
    }
}

export default connect(mapStateToProps)(Cart);