import React, {SFC} from 'react';

import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';

import { Typography } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import {Link} from 'react-router-dom';
import IProps from './IProps';

import styles from './SectionPresentation.module.scss';

const SectionPresentation: SFC<IProps> = (props) => {

    let shopLink = null;

    if (props.showLink) {

        const to = props.to ? props.to : '#';

        shopLink = (
            <Container justify='center'>
                <Link 
                    className={styles.ProductLink}
                    to={to}
                    >{props.linkText} <ArrowRightIcon fontSize='small'/>
                </Link>
            </Container>
        );
    }

    return (
        <Container justify='center'>
            <Item xs={12} className={props.className}>
                <Typography 
                    className={styles.ProductHeader} 
                    variant='h4'
                    >{props.title}
                </Typography>
                <Typography 
                    className={styles.ProductText} 
                    variant='body1'
                    >{props.body}
                </Typography>
                {shopLink}
            </Item>
        </Container>
    );
}

export default SectionPresentation;