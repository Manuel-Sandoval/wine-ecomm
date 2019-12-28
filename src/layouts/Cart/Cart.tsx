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
import Checkout from '../../components/Checkout/Checkout';
import IState from './ICartState';
import { emptyInfo, populateSummary } from '../../store/checkout/CheckoutActions';
import { ICheckoutSummary } from '../../store/checkout/CheckoutTypes';

class Cart extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }


    public render() {

        let subtotal = 0;
        let taxes = 0;
        let total = 0;

        if (this.props.products.length > 0) {
            subtotal = this.props.products.reduce((t, n) => (t + (Number(n.wine.price.toFixed(2)) * n.quantity)), 0);
            taxes = this.props.products.reduce((t, n) => (t + (Number(n.wine.price.toFixed(2)) * .16 * n.quantity)), 0)
            total = subtotal + taxes;
        }

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
                            <Typography>$ {subtotal.toFixed(2)}</Typography>
                            <Typography><strong>Taxes:</strong></Typography>
                            <Typography>$ {taxes.toFixed(2)}</Typography>
                            <Typography><strong>Total:</strong></Typography>
                            <Typography>$ {total.toFixed(2)}</Typography>
                        </div>
                        <Button variant='contained' onClick={this.openModalHandler}>
                            Proceed to checkout
                        </Button>
                    </Item>
                </Container>
                <Checkout modalOpen={this.state.modalOpen} cancel={this.closeModalHandler}/>
            </div>
        );
    }

    private openModalHandler = () => {
        this.setState({modalOpen: true});
        this.props.populateSummary({items: this.props.products});
        
    } 

    private closeModalHandler = () => {
        this.setState({modalOpen: false});
        this.props.emptyInfo();
    } 

}

const mapStateToProps = (store: IApplicationState) => {
    return {
        products: store.cart.products
    }
}

const mapDispatchToProps = (dispatch: any) => (
    {
        emptyInfo: () => dispatch(emptyInfo()),
        populateSummary: (summaryInfo: ICheckoutSummary) => dispatch(populateSummary(summaryInfo))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);