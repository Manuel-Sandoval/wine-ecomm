import React, { SFC } from 'react';
import { Typography } from '@material-ui/core';
import styles from './Title.module.scss';
import IProps from './IProps';

const Title: SFC<IProps> = props => (
    <div className={styles.TitleContainer}>
        <Typography variant='h2'>{props.title}</Typography>
    </div>
)

export default Title;