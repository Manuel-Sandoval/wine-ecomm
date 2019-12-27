import React, { SFC, useState, ChangeEvent, useEffect } from 'react';
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

    const [inputValues, setInputValues] = useState(
        {
            firstName: {
                id: 'firstName',
                value: props.userInfo.firstName, 
                error: false, 
                touched: false,
                requiered: true
            },
            middleName: {
                id: 'middleName',
                value: props.userInfo.middleName,
                error: false, 
                touched: false,
                requiered: false
            },
            lastName: {
                id: 'lastName',
                value: props.userInfo.lastName, 
                error: false, 
                touched: false,
                requiered: true
            },
            address: {
                id: 'address',
                value: props.userInfo.address, 
                error: false, 
                touched: false,
                requiered: true
            },
            phoneNumber: {
                id: 'phoneNumber',
                value: props.userInfo.phoneNumber, 
                error: false, 
                touched: false, 
                limit: 10,
                requiered: true
            }
        }            
    );

    const onChangeFirstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const firstNameVal = event.target.value;
        if (isOnlyString(firstNameVal)) {
            setInputValues({
                ...inputValues,
                firstName: {
                    ...inputValues.firstName,
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
            setInputValues({
                ...inputValues,
                middleName: {
                    ...inputValues.middleName,
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
            setInputValues({
                ...inputValues,
                lastName: {
                    ...inputValues.lastName,
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
        setInputValues({
            ...inputValues,
            address: {
                ...inputValues.address,
                touched: true,
                error: address === '',
                value: address
            }
        });
    } 

    const onChangePhoneNumberHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const phoneTarget = event.target.value;
        const error = phoneTarget.length < inputValues.phoneNumber.limit;

        if (isInteger(phoneTarget) && phoneTarget.length <= inputValues.phoneNumber.limit) {
            setInputValues({
                ...inputValues,
                phoneNumber: {
                    ...inputValues.phoneNumber,
                    value: phoneTarget,
                    touched: true,
                    error
                }
            });
        }
        
    } 

    useEffect(() => {
        const errors = Object.values(inputValues);
        const valid = errors.every(err => {
            if (err.requiered) {
                return err.touched && !err.error
            }
            return !err.error;
        });        
        props.setDisable(!valid);
        props.storeUser({
            firstName: inputValues.firstName.value,
            middleName: inputValues.middleName.value,
            lastName: inputValues.lastName.value,
            address: inputValues.address.value,
            phoneNumber: inputValues.phoneNumber.value
        });

    }, [inputValues.firstName.value,
        inputValues.middleName.value,
        inputValues.lastName.value,
        inputValues.address.value,
        inputValues.phoneNumber.value]);

    return (
        <form>
            <Container spacing={2}>
                <Item xs={12} md={4}>
                    <TextField 
                            id={inputValues.firstName.id} 
                            label='First Name' 
                            variant='outlined' 
                            error={inputValues.firstName.error}
                            className={styles.TextForm} 
                            value={inputValues.firstName.value}
                            onChange={onChangeFirstNameHandler}/>
                </Item>
                <Item xs={12} md={4}>
                    <TextField 
                            id={inputValues.middleName.id} 
                            label='Middle Name' 
                            variant='outlined'
                            className={styles.TextForm}
                            value={inputValues.middleName.value}
                            onChange={onChangeMiddleNameHandler}/>
                </Item>
                <Item xs={12} md={4}>
                    <TextField 
                            id={inputValues.lastName.id} 
                            label='Last Name' 
                            variant='outlined'
                            error={inputValues.lastName.error}
                            className={styles.TextForm}
                            value={inputValues.lastName.value}
                            onChange={onChangeLastNameHandler}/>
                </Item>
                <Item xs={12}>
                    <TextField 
                            id={inputValues.address.id}
                            label='Address' 
                            variant='outlined'
                            error={inputValues.address.error}
                            className={styles.TextForm}
                            value={inputValues.address.value}
                            onChange={onChangeAddressHandler}/>
                </Item>
                <Item xs={12}>
                    <TextField 
                            id={inputValues.phoneNumber.id} 
                            label='Phone Number' 
                            variant='outlined'
                            error={inputValues.phoneNumber.error}
                            className={styles.TextForm}
                            value={inputValues.phoneNumber.value} 
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
        storeUser: (userInfo: ICheckoutUserInfo) => dispatch(storeUser(userInfo))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(LocationForm);