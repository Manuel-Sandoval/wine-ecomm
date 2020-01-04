import React, {SFC} from 'react';
import { IApplicationState } from '../../../store/Store';
import IProps from './ICartSummaryProps';
import CartIcon from '@material-ui/icons/ShoppingCart';
import styles from './CartSummary.module.scss'
import { connect } from 'react-redux';

const CartSummary: SFC<IProps> = props => {
    return (
        <div className={props.wrapperClass}>
            <h4>Cart <span className={styles.Price} style={{color:'black'}}><CartIcon/> <b>{props.summary.items.length}</b></span></h4>
            {
                props.summary.items.map((v) => (
                    <p key={v.wine.id}>
                        <span>{v.wine.title}</span> 
                        <span className={styles.Price}>${v.wine.price.toFixed(2)}</span>
                    </p>
                ))
            }
            <hr/>
            <p>Total 
                <span className={styles.Price} style={{color:'black'}}>
                    <b>${props.summary.items.reduce((total, w) => (total + Number(w.wine.price.toFixed(2))), 0)}</b>
                </span>
            </p>
        </div>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        summary: store.checkout.summary
    }
);

export default connect(mapStateToProps)(CartSummary);