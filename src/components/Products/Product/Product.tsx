import React, {SFC} from 'react';
import { Typography, Card, CardHeader, CardContent, CardActions, IconButton } from '@material-ui/core';
import AddToCart from '@material-ui/icons/AddShoppingCart';
import Details from '@material-ui/icons/Details';
import IProps from './IProps';
import './Product.scss';
import { Link } from 'react-router-dom';

const Product : SFC<IProps> = (props) => {

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
                <IconButton className='button'>
                    <AddToCart/>
                </IconButton>
                <Link to={`/PDP/${props.id}`}>
                    <IconButton>
                        <Details/>
                    </IconButton>
                </Link>
            </CardActions>         
        </Card>
    )
}

export default Product;