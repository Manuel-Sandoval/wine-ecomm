import React, { SFC, ChangeEvent, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import Container from '../../../../ui/Container/Container';
import Item from '../../../../ui/Item/Item';
import styles from './LocationForm.module.scss';
import IProps from './ILocationFormProps';
import { IApplicationState } from '../../../../store/Store';
import { connect } from 'react-redux';
import { isInteger, isOnlyString } from '../FormValidationFunc';
import { storeUser } from '../../../../store/checkout/CheckoutActions';
import { ICheckoutUserInfo } from '../../../../store/checkout/CheckoutTypes';

const LocationForm: SFC<IProps> = props => {

    const {userInfo, storeUserInfo, setDisable} = props;

    const onChangeFirstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const firstNameVal = event.target.value;
        if (isOnlyString(firstNameVal)) {
            storeUserInfo({
                ...userInfo,
                firstName: {
                    ...userInfo.firstName,
                    touched: true,
                    error: firstNameVal === '',
                    value: firstNameVal
                }
            });
        }
    } 

    const onChangeMiddleNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const middleName = event.target.value;
        if (isOnlyString(middleName)) {
            storeUserInfo({
                ...userInfo,
                middleName: {
                    ...userInfo.middleName,
                    touched: true,
                    value: middleName
                }
            });
        }
    } 

    const onChangeLastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const lastName = event.target.value;
        if (isOnlyString(lastName)) {
            storeUserInfo({
                ...userInfo,
                lastName: {
                    ...userInfo.lastName,
                    touched: true,
                    error: lastName === '',
                    value: lastName
                }
            });
        }
    } 

    const onChangeAddressHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const address = event.target.value;
        storeUserInfo({
            ...userInfo,
            address: {
                ...userInfo.address,
                touched: true,
                error: address === '',
                value: address
            }
        });
    } 

    const onChangePhoneNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const phoneTarget = event.target.value;
        const error = phoneTarget.length < userInfo.phoneNumber.limit;

        if (isInteger(phoneTarget) && phoneTarget.length <= userInfo.phoneNumber.limit) {
            storeUserInfo({
                ...userInfo,
                phoneNumber: {
                    ...userInfo.phoneNumber,
                    value: phoneTarget,
                    touched: true,
                    error
                }
            });
        }
        
    } 

    useEffect(() => {
        const info = Object.values(userInfo);
        const valid = info.every(i => {
            if (i.requiered) {
                return i.touched && !i.error
            }
            return !i.error;
        });        
        setDisable(!valid);

    }, [userInfo, setDisable]);

    return (
        <form>
            <Container spacing={2}>
                <Item xs={12} md={4}>
                    <TextField 
                            id={userInfo.firstName.id} 
                            label='First Name' 
                            variant='outlined' 
                            error={userInfo.firstName.error}
                            className={styles.TextForm} 
                            value={userInfo.firstName.value}
                            onChange={onChangeFirstNameHandler}/>
                </Item>
                <Item xs={12} md={4}>
                    <TextField 
                            id={userInfo.middleName.id} 
                            label='Middle Name' 
                            variant='outlined'
                            className={styles.TextForm}
                            value={userInfo.middleName.value}
                            onChange={onChangeMiddleNameHandler}/>
                </Item>
                <Item xs={12} md={4}>
                    <TextField 
                            id={userInfo.lastName.id} 
                            label='Last Name' 
                            variant='outlined'
                            error={userInfo.lastName.error}
                            className={styles.TextForm}
                            value={userInfo.lastName.value}
                            onChange={onChangeLastNameHandler}/>
                </Item>
                <Item xs={12}>
                    <TextField 
                            id={userInfo.address.id}
                            label='Address' 
                            variant='outlined'
                            error={userInfo.address.error}
                            className={styles.TextForm}
                            value={userInfo.address.value}
                            onChange={onChangeAddressHandler}/>
                </Item>
                <Item xs={12}>
                    <TextField 
                            id={userInfo.phoneNumber.id} 
                            label='Phone Number' 
                            variant='outlined'
                            error={userInfo.phoneNumber.error}
                            className={styles.TextForm}
                            value={userInfo.phoneNumber.value} 
                            onChange={onChangePhoneNumberHandler}/>
                </Item>
            </Container>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);