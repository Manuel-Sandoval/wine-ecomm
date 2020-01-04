import React, {SFC} from 'react';
import IProps from './ICheckoutModalProps';
import styles from './CheckoutModal.module.scss'
import { Dialog, Paper, Button } from '@material-ui/core';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Billing from './Billing/Billing';
import Payment from './Payment/Payment';
import CartSummary from './CartSummary/CartSummary';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/Store';
import { emptyInfo } from '../../store/checkout/CheckoutActions';
import { inputIsValid } from './CheckModalValidation';
import IOrder from '../../services/IOrder';

const CheckoutModal: SFC<IProps> = props => {  

    const submitOrderHandler = () => {
   
        if (inputIsValid(props.userInfo) && inputIsValid(props.paymentInfo)) {
            const wineIds = props.summaryInfo.items.map(v => v.wine.id);
            const order: IOrder = {
                fullName: props.userInfo.fullName.value,
                email: props.userInfo.email.value, 
                address: props.userInfo.address.value, 
                city: props.userInfo.city.value, 
                state: props.userInfo.state.value, 
                zip: Number(props.userInfo.zip.value), 
                paymentInfo: {
                    cardNumber: Number(props.paymentInfo.cardNumber.value),
                    cardHolderName: props.paymentInfo.cardHolderName.value,
                    expirationMonth: Number(props.paymentInfo.expirationMonth.value),
                    expirationYear: Number(props.paymentInfo.expirationYear.value),
                    secretCode: Number(props.paymentInfo.secretCode.value),
                },
                winesId: wineIds
            }; 
            console.log(order);
        } 
      
        
    }

    return (
        <Dialog fullScreen={true} open={props.modalOpen}>
            <Container spacing={3}>
                <Item xs={12} sm={12} md={9}>
                    <Paper className={styles.Paper}>
                        <Container spacing={1}>
                            <Item xs={12} sm={12} md={6}>
                                <Billing wrapperClass={styles.Container}/>
                            </Item>
                            <Item xs={12} sm={12} md={6}>
                                <Payment wrapperClass={styles.Container}/>
                            </Item>
                        </Container>
                    </Paper>
                </Item>
                <Item xs={12} sm={12} md={3}>
                    <Paper className={styles.Paper}>
                        <CartSummary wrapperClass={styles.Container}/>
                    </Paper>
                </Item>
            </Container>
            <Item xs={12} sm={12} md={9}>
                <div className={styles.Buttons}>
                    <div className={styles.CancelButton}>
                        <Button variant='outlined' onClick={props.cancel} >Cancel</Button>
                    </div>
                    <Button variant='contained' color='secondary' onClick={submitOrderHandler}>Buy now</Button>
                </div>
            </Item>
        </Dialog>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        userInfo: store.checkout.userInfo,
        paymentInfo: store.checkout.paymentInfo,
        summaryInfo: store.checkout.summary
    }
)

const mapDispatchToProps = (dispatch: any) => (
    {
        cancel: () => dispatch(emptyInfo())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutModal);