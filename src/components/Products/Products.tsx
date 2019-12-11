import React, { SFC } from 'react';
import IProps from './IProps';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Product from './Product/Product';

const Products: SFC<IProps> = (props) => {
    return (
        <Container direction='row' justify='center' alignItems='center' spacing={4} className='products'>
            {props.list.map((v, k) => {
                return ( 
                        <Item key={v.id} xs={12} sm={6} md={4}>
                            <Product 
                                id={v.id}
                                brand={v.brand}
                                description={v.description}
                                image={v.image} 
                                price={v.price}
                                title={v.title}
                                />
                        </Item>
                    );
                })
            }
        </Container>
    );
}

export default Products;