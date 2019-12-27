import React, { SFC } from 'react';
import IProps from './IProps';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Product from './Product/Product';

import styles from './Products.module.scss'

const Products: SFC<IProps> = (props) => {
    return (
        <Container direction='row' justify='center' alignItems='center' spacing={4} className={styles.Products}>
            {props.list.map((v) => {
                return ( 
                        <Item key={v.wine.id} xs={12} sm={6} md={4}>
                            <Product 
                                id={v.wine.id}
                                brand={v.wine.brand}
                                description={v.wine.description}
                                image={v.wine.image} 
                                price={v.wine.price}
                                title={v.wine.title}
                                isInCart = {v.isInCart}
                                />
                        </Item>
                    );
                })
            }
        </Container>
    );
}

export default Products;