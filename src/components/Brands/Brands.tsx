import React, { SFC } from 'react'
import IProps from './IProps';
import styles from './Brands.module.scss';
import Brand from './Brand/Brand'
import Item from '../../ui/Item/Item';
import Container from '../../ui/Container/Container';

const Brands: SFC<IProps> = (props) => {

    let brands = null;

    if (props.list) {
        
        brands = props.list.map((v, k) => {
            return (
                <Item key={`${v.id}_${k}`} xs={6} sm={4} md={3}>
                    <Brand id={v.id} logo={v.logo} name={v.name}/>
                </Item>
            );
        });
    }

    return (
        <>
            <Container direction='row' justify='center' alignItems='center' spacing={4} className={styles.Brands}>
                {brands}
            </Container>
        </>
    );
}

export default Brands;