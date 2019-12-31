import React, { SFC, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import mainAPI from '../../middleware/MainService';
import IWine from '../../components/Products/Product/IProps';
import { Typography, Button } from '@material-ui/core';
import styles from './PDP.module.scss';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Title from '../../components/Title/Title';
import { IApplicationState } from '../../store/Store';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../store/cart/CartActions';
import ICartItem from '../../components/CartItems/CartItem/IProps';
import IProps from './IPDPProps';


const PDP: SFC<IProps> = props => {

    const {id} = useParams();
    const [wine, setWines] = useState<IWine>();
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        mainAPI.get<IWine>(`/wine/${id}`)
                .then(res => {
                    if (res.data === null) {
                        setRedirect(true);
                    }
                    setWines(res.data);
                })
                .catch(err => {
                    console.log(err)
                });
    }, [id]);

    let shouldRedirect = null;
    
    if (redirect) {
        shouldRedirect = <Redirect to='/shop' />
    }

    const isInCart = props.cartItems.filter(ci => ci.wine.id === Number(id)).length > 0;
    const buttonText = isInCart ? 'Remove from cart' : 'Add to cart';
    const buttonEvent = isInCart ? props.removeFromCart : props.addItemToCart;

    return (
        <div>
            {
                wine && 
                <>
                    <Title title={wine.title}/>
                    <Container justify='center' className={styles.ProductInfo}>
                        <Item xs={12} sm={5} md={4} className={styles.ImageItem}>
                            <div className={styles.ImageContainer}>
                                <img src={wine.image} alt={wine.title}/>
                            </div>
                        </Item>
                        <Item xs={12} sm={7} md={5} className={styles.ProductSummary}>
                            <Typography variant='h4' className={styles.Title}>Wine Details</Typography>
                            <Typography className={styles.Description}>{wine.description}</Typography>
                            <Typography className={styles.Description}><strong>Price:</strong> $ {wine.price.toFixed(2)}</Typography>
                            
                            <div className={styles.AddToCart}>    
                                <div>
                                    <Button variant="contained" className={styles.Add} onClick={() => buttonEvent({wine, quantity: 1})} >{buttonText}</Button>
                                </div>
                            </div>

                        </Item>
                    </Container>
                </>
            }
            {shouldRedirect}
        </div>
    );
}

const mapStateToProps = (store: IApplicationState) => (
    {
        cartItems: store.cart.products
    }
);

const mapDispatchToProps = (dispatch: any) => (
    {
        addItemToCart: (cartItem: ICartItem) => dispatch(addItem(cartItem)),
        removeFromCart: (cartItem: ICartItem) => dispatch(deleteItem(cartItem))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(PDP);