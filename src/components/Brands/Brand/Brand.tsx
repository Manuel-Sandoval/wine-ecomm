import React, { SFC } from 'react'
import IProps from './IProps'
import { Card } from '@material-ui/core'
import styles from './Brand.module.scss';

const Brand: SFC<IProps> = (props) => {
    return (
        <Card className={styles.Card}>
            <div className={styles.Media}>
                <img src={props.logo} alt={props.name}/>
            </div>
        </Card>
    );
}

export default Brand;