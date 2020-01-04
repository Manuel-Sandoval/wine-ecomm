import React, {SFC, ChangeEvent} from 'react';
import IProps from './IBillingProps';
import Item from '../../../ui/Item/Item';
import { Input } from '@material-ui/core';
import { IApplicationState } from '../../../store/Store';
import { connect } from 'react-redux';
import { isAlphabeticOnly, isNumericOnly, isEmail } from '../FormValidators';
import { storeUser } from '../../../store/checkout/CheckoutActions';
import { ICheckoutUserInfo, ILimitNumber } from '../../../store/checkout/CheckoutTypes';

const Billing: SFC<IProps> = props => {
    
    const {userInfo, storeUserInfo} = props;

    const onChangeAlphabeticOnlyHandler = (event: ChangeEvent<HTMLInputElement>, target: keyof ICheckoutUserInfo) => {
        event.preventDefault();
        const value = event.target.value;
        if (isAlphabeticOnly(value)) {
            storeUserInfo({
                ...userInfo,
                [target]: {
                    ...userInfo[target],
                    touched: true,
                    error: value === '',
                    value
                }
            }); 
        }
    } 

    const onChangeGenericHandler = (event: ChangeEvent<HTMLInputElement>, target: keyof ICheckoutUserInfo) => {
        event.preventDefault();
        const value = event.target.value;
        storeUserInfo({
            ...userInfo,
            [target]: {
                ...userInfo[target],
                touched: true,
                error: value === '',
                value
            }
        }); 
    } 

    const onChangeLimitNumericOnlyHandler = (event: ChangeEvent<HTMLInputElement>, target: keyof ICheckoutUserInfo) => {
        event.preventDefault();
        const value = event.target.value;
        if (isNumericOnly(value) && (userInfo[target] as ILimitNumber).limit >= value.length) {
            storeUserInfo({
                ...userInfo,
                [target]: {
                    ...userInfo[target],
                    touched: true,
                    error: (userInfo[target] as ILimitNumber).limit > value.length,
                    value
                }
            }); 
        }
    } 

    const onChangeEmailHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const value = event.target.value;
        storeUserInfo({
            ...userInfo,
            email: {
                ...userInfo.email,
                touched: true,
                error: !isEmail(value),
                value
            }
        }); 
    }

    return (
        <div className={props.wrapperClass}>
            <Item xs={12}>
                <h3>Billing Address</h3>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.fullName.id} 
                        error={userInfo.fullName.error}
                        name={userInfo.fullName.id} 
                        placeholder="John M. Doe"
                        value={userInfo.fullName.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeAlphabeticOnlyHandler(event, 'fullName')} />
                <label htmlFor={userInfo.fullName.id}>Full Name</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.email.id} 
                        name={userInfo.email.id}
                        placeholder="john@example.com"
                        error={userInfo.email.error}
                        value={userInfo.email.value}
                        onChange={onChangeEmailHandler} />
                <label htmlFor={userInfo.email.id}>Email</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.address.id}  
                        name={userInfo.address.id} 
                        placeholder="542 W. 15th Street"
                        error={userInfo.address.error}
                        value={userInfo.address.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeGenericHandler(event, 'address')} />
                <label htmlFor={userInfo.address.id}>Address</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.city.id} 
                        name={userInfo.city.id} 
                        placeholder="New York"
                        error={userInfo.city.error}
                        value={userInfo.city.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeAlphabeticOnlyHandler(event, 'city')}/>
                <label htmlFor={userInfo.city.id}>City</label>
            </Item>
            <Item xs={12}>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.state.id} 
                        name={userInfo.state.id} 
                        placeholder="NY"
                        error={userInfo.state.error}
                        value={userInfo.state.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeAlphabeticOnlyHandler(event, 'state')}
                        />
                <label htmlFor={userInfo.state.id}>State</label>
                <Input color='secondary' 
                        fullWidth={true} 
                        type="text" 
                        id={userInfo.zip.id}
                        name={userInfo.zip.id} 
                        placeholder="10001"
                        error={userInfo.zip.error}
                        value={userInfo.zip.value}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeLimitNumericOnlyHandler(event, 'zip')}/>
                <label htmlFor="zip">Zip</label>
            </Item>
        </div>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        userInfo: store.checkout.userInfo
    }
);

const mapDispatchToProps = (dispatch: any) => (
    {
        storeUserInfo: (userInfo: ICheckoutUserInfo) => dispatch(storeUser(userInfo))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Billing);