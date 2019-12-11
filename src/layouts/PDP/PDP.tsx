import React, { SFC, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import mainAPI from '../../middleware/MainService';
import IWine from '../../components/Products/Product/IProps';
import { Typography, Button } from '@material-ui/core';
import styles from './PDP.module.scss';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';

const PDP: SFC = () => {

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

    return (
        <div>
            {
                wine && 
                <>
                    <div className={styles.TitleContainer}>
                        <Typography variant='h2'>{wine.title}</Typography>
                    </div>
                    <Container justify='center' className={styles.ProductInfo}>
                        <Item xs={12} sm={5} md={4} className={styles.ImageItem}>
                            <div className={styles.ImageContainer}>
                                <img src={wine.image} alt={wine.title}/>
                            </div>
                        </Item>
                        <Item xs={12} sm={7} md={5}>
                            <Typography variant='h4' className={styles.Title}>Wine Details</Typography>
                            <Typography className={styles.Description}>{wine.description}</Typography>
                            <Typography className={styles.Description}><strong>Price:</strong> $ {wine.price.toFixed(2)}</Typography>
                            
                            <div className={styles.AddToCart}>    
                                <div>
                                    <Button variant="contained">Add to Cart</Button>
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

export default PDP;