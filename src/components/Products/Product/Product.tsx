import React, {SFC} from 'react';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import AddToCart from '@material-ui/icons/AddShoppingCart';
import RemoveFromCart from '@material-ui/icons/RemoveShoppingCart'
import Details from '@material-ui/icons/Details';
import IProps, {IExtendedProps} from './IProps';
import './Product.scss';
import { Link } from 'react-router-dom';
import { addItem, deleteItem } from '../../../store/cart/CartActions';
import { connect } from 'react-redux';


const Product : SFC<IExtendedProps> = (props) => {

    let cartButton = (
        <IconButton className='button' onClick={()=> props.addItem(props)}>
            <AddToCart/>
        </IconButton>
    )

    if (props.isInCart) {
        cartButton = (
            <IconButton className='button' onClick={()=> props.removeItem(props)}>
                <RemoveFromCart/>
            </IconButton>
        )
    }

    return (
        <Card className='product'>
            <CardHeader title={props.title}/>
            <img src={props.image}
                alt={props.title}
                className='product-image'/>
            <CardContent>
                <Typography variant='subtitle1'>{props.brand.name}</Typography>
                <Typography variant='subtitle2'>$ {props.price.toFixed(2)}</Typography>
            </CardContent>   
            <CardActions disableSpacing={true}>
                {cartButton}
                <Link to={`/PDP/${props.id}`}>
                    <IconButton>
                        <Details/>
                    </IconButton>
                </Link>
            </CardActions>         
        </Card>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addItem: (product: IProps) => dispatch(addItem({wine: product, quantity: 1})),
        removeItem: (product: IProps) => dispatch(deleteItem({wine: product, quantity: 1}))
    }
}

export default connect(null, mapDispatchToProps)(Product);