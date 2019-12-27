import React, { SFC } from 'react';
import styles from './Payment.module.scss';
import Container from '../../../../ui/Container/Container';
import Item from '../../../../ui/Item/Item';
import { TextField } from '@material-ui/core';
import IProps from './IPaymentProps';

const Payment: SFC<IProps> = (props) => {

    return (
        <form>
            <Container spacing={2}>
                <Item xs={12}>
                    <TextField id='cardNumber' label='Card Number' variant='outlined' className={styles.TextForm} />
                </Item>
                <Item xs={12}>
                    <TextField id='cardAddress' label='Card Address' variant='outlined' className={styles.TextForm}/>
                </Item>
                <Item xs={4}>
                    <TextField id='expirationMonth' label='Expiration Month' variant='outlined' className={styles.TextForm}/>
                </Item>
                <Item xs={4}>
                    <TextField id='expirationYear' label='Expiration Year' variant='outlined' className={styles.TextForm}/>
                </Item>
                <Item xs={4}>
                    <TextField id='secretCode' label='Secret Code' variant='outlined' className={styles.TextForm}/>
                </Item>
            </Container>
        </form>
    );
}

export default Payment;