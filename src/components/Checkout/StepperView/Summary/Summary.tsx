import React, { SFC } from 'react';
import { IApplicationState } from '../../../../store/Store';
import { connect } from 'react-redux';
import Container from '../../../../ui/Container/Container';
import IProps from './ISummaryProps';
import Item from '../../../../ui/Item/Item';
import { Paper, Typography } from '@material-ui/core';
import styles from './Summary.module.scss';

const Summary: SFC<IProps> = props => {
    return (
        <Container spacing={2} justify='center'>
            {
                props.summaryInfo.items.map((v, k) => {
                    return (
                        <Item xs={12} md={4} key={k}>
                            <Paper style={{textAlign: 'center'}}>
                                <div className={styles.ImageContainer}>
                                    <img src={v.wine.image} alt={v.wine.title}/>
                                </div>
                                <Typography variant='subtitle1'>Quantity: {v.quantity}</Typography>
                            </Paper>
                        </Item>
                    )
                })
            }
        </Container>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        summaryInfo: store.checkout.summary
    }
)


export default connect(mapStateToProps)(Summary);