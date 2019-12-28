import React, { SFC, useEffect, ChangeEvent } from 'react';
import styles from './Payment.module.scss';
import Container from '../../../../ui/Container/Container';
import Item from '../../../../ui/Item/Item';
import { TextField } from '@material-ui/core';
import IProps from './IPaymentProps';
import { IApplicationState } from '../../../../store/Store';
import { connect } from 'react-redux';
import { ICheckoutPaymentInfo } from '../../../../store/checkout/CheckoutTypes';
import { storePayment } from '../../../../store/checkout/CheckoutActions';
import { isInteger } from '../FormValidationFunc';

const Payment: SFC<IProps> = (props) => {

    const {paymentInfo, storePaymentInfo, setDisable} = props;
    
    useEffect(() => {
        const info = Object.values(paymentInfo);
        const valid = info.every(i => {
            if (i.requiered) {
                return i.touched && !i.error
            }
            return !i.error;
        });
        setDisable(!valid);

    }, [paymentInfo, setDisable]);

    const onChangeCardNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const cardNumber = event.target.value;
        const error = cardNumber.length < paymentInfo.cardNumber.limit;

        if (isInteger(cardNumber) && cardNumber.length <= paymentInfo.cardNumber.limit) {
            storePaymentInfo({
                ...paymentInfo,
                cardNumber: {
                    ...paymentInfo.cardNumber,
                    value: cardNumber,
                    touched: true,
                    error
                }
            });
        }
    }

    const onChangeCardAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const cardAddress = event.target.value;

        storePaymentInfo({
            ...paymentInfo,
            cardAddress: {
                ...paymentInfo.cardAddress,
                value: cardAddress,
                touched: true,
                error: cardAddress === ''
            }
        });

    }

    const onChangeExpirationMonthHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const expirationMonth = event.target.value;
        const error = expirationMonth.length < paymentInfo.expirationMonth.limit;

        if (isInteger(expirationMonth) && expirationMonth.length <= paymentInfo.expirationMonth.limit) {
            storePaymentInfo({
                ...paymentInfo,
                expirationMonth: {
                    ...paymentInfo.expirationMonth,
                    value: expirationMonth,
                    touched: true,
                    error
                }
            });
        }
    }

    const onChangeExpirationYearHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const expirationYear = event.target.value;
        const error = expirationYear.length < paymentInfo.expirationYear.limit;

        if (isInteger(expirationYear) && expirationYear.length <= paymentInfo.expirationYear.limit) {
            storePaymentInfo({
                ...paymentInfo,
                expirationYear: {
                    ...paymentInfo.expirationYear,
                    value: expirationYear,
                    touched: true,
                    error
                }
            });
        }
    }

    const onChangeSecretCodeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const secretCode = event.target.value;
        const error = secretCode.length < paymentInfo.secretCode.limit;

        if (isInteger(secretCode) && secretCode.length <= paymentInfo.secretCode.limit) {
            storePaymentInfo({
                ...paymentInfo,
                secretCode: {
                    ...paymentInfo.secretCode,
                    value: secretCode,
                    touched: true,
                    error
                }
            });
        }
    }
    
    return (
        <form>
            <Container spacing={2}>
                <Item xs={12}>
                    <TextField id={paymentInfo.cardNumber.id} 
                            label='Card Number' 
                            variant='outlined' 
                            className={styles.TextForm}
                            error={paymentInfo.cardNumber.error}
                            value={paymentInfo.cardNumber.value}
                            onChange={onChangeCardNumberHandler} />
                </Item>
                <Item xs={12}>
                    <TextField id={paymentInfo.cardAddress.id} 
                            label='Card Address' 
                            variant='outlined' 
                            className={styles.TextForm}
                            error={paymentInfo.cardAddress.error}
                            value={paymentInfo.cardAddress.value}
                            onChange={onChangeCardAddressHandler}/>
                </Item>
                <Item xs={4}>
                    <TextField id={paymentInfo.expirationMonth.id} 
                            label='Expiration Month' 
                            variant='outlined' 
                            className={styles.TextForm}
                            error={paymentInfo.expirationMonth.error}
                            value={paymentInfo.expirationMonth.value}
                            onChange={onChangeExpirationMonthHandler}/>
                </Item>
                <Item xs={4}>
                    <TextField id={paymentInfo.expirationYear.id} 
                            label='Expiration Year' 
                            variant='outlined' 
                            className={styles.TextForm}
                            error={paymentInfo.expirationYear.error}
                            value={paymentInfo.expirationYear.value}
                            onChange={onChangeExpirationYearHandler}/>
                </Item>
                <Item xs={4}>
                    <TextField id={paymentInfo.secretCode.id} 
                            label='Secret Code' 
                            variant='outlined' 
                            className={styles.TextForm}
                            error={paymentInfo.secretCode.error}
                            value={paymentInfo.secretCode.value}
                            onChange={onChangeSecretCodeHandler}/>
                </Item>
            </Container>
        </form>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        paymentInfo: store.checkout.paymentInfo
    }
);

const mapDispatchToProps = (dispatch: any) => (
    {
        storePaymentInfo: (paymentInfo: ICheckoutPaymentInfo) => dispatch(storePayment(paymentInfo))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Payment);