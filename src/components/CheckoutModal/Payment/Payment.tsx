import React, {SFC, ChangeEvent} from 'react';
import IProps from './IPaymentProps';
import Item from '../../../ui/Item/Item';
import { Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../store/Store';
import { isNumericOnly, isAlphabeticOnly } from '../FormValidators';
import { ICheckoutPaymentInfo, ILimitNumber } from '../../../store/checkout/CheckoutTypes';
import { storePayment } from '../../../store/checkout/CheckoutActions';

const Payment: SFC<IProps> = props => {

    const {paymentInfo, storePaymentInfo} = props;


    const onChangeAlphabeticOnlyHandler = (event: ChangeEvent<HTMLInputElement>, target: keyof ICheckoutPaymentInfo) => {
        event.preventDefault();
        const value = event.target.value;
        if (isAlphabeticOnly(value)) {
            storePaymentInfo({
                ...paymentInfo,
                [target]: {
                    ...paymentInfo[target],
                    touched: true,
                    error: value === '',
                    value
                }
            }); 
        }
    }

    const onChangeLimitNumericOnlyHandler = (event: ChangeEvent<HTMLInputElement>, target: keyof ICheckoutPaymentInfo) => {
        event.preventDefault();
        const value = event.target.value;
        if (isNumericOnly(value) && (paymentInfo[target] as ILimitNumber).limit >= value.length) {
            storePaymentInfo({
                ...paymentInfo,
                [target]: {
                    ...paymentInfo[target],
                    touched: true,
                    error: (paymentInfo[target] as ILimitNumber).limit > value.length,
                    value
                }
            }); 
        }
    } 

    return (
        <div className={props.wrapperClass}>
            <h3>Payment</h3>
            <Item xs={12}>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={paymentInfo.cardHolderName.id} 
                        name={paymentInfo.cardHolderName.id} 
                        placeholder="John Doe"
                        error={paymentInfo.cardHolderName.error}
                        value={paymentInfo.cardHolderName.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeAlphabeticOnlyHandler(event, 'cardHolderName')}/>
                <label htmlFor={paymentInfo.cardHolderName.id}>Name on Card</label>
                <Input color='secondary' 
                        fullWidth={true}  
                        type="text" 
                        id={paymentInfo.cardNumber.id} 
                        name={paymentInfo.cardNumber.id}
                        placeholder="1111222233334444"
                        error={paymentInfo.cardNumber.error}
                        value={paymentInfo.cardNumber.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLimitNumericOnlyHandler(event, 'cardNumber')}/>
                <label htmlFor={paymentInfo.cardNumber.id}>Credit card number</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={paymentInfo.expirationMonth.id}
                        name={paymentInfo.expirationMonth.id}
                        placeholder="12" 
                        error={paymentInfo.expirationMonth.error}
                        value={paymentInfo.expirationMonth.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLimitNumericOnlyHandler(event, 'expirationMonth')}/>
                <label htmlFor={paymentInfo.expirationMonth.id}>Exp Month</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={paymentInfo.expirationYear.id}
                        name={paymentInfo.expirationYear.id}
                        placeholder="2018" 
                        error={paymentInfo.expirationYear.error}
                        value={paymentInfo.expirationYear.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLimitNumericOnlyHandler(event, 'expirationYear')}/>
                <label htmlFor={paymentInfo.expirationYear.id}>Exp Year</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={paymentInfo.secretCode.id}
                        name={paymentInfo.secretCode.id}
                        placeholder="3522" 
                        error={paymentInfo.secretCode.error}
                        value={paymentInfo.secretCode.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLimitNumericOnlyHandler(event, 'secretCode')}/>
                <label htmlFor={paymentInfo.secretCode.id}>CVV</label>
            </Item>

        </div>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        paymentInfo: store.checkout.paymentInfo
    }
)

const mapDispatchToProps = (dispatch: any) => (
    {
        storePaymentInfo: (paymentInfo: ICheckoutPaymentInfo) => dispatch(storePayment(paymentInfo))
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Payment);