import React, { Component } from 'react';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import Products from '../../components/Products/Products';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Filters from '../../components/Filters/Filters';
import {IApplicationState} from '../../store/Store';
import { getProducts } from '../../store/products/ProductActions';
import IShopProps from './IShopProps';
import { connect } from 'react-redux';

class Shop extends Component<IShopProps> {

    public componentDidMount() {
        this.props.getProducts();
    }

    public render() {
        return (
            <div>
                <SectionPresentation 
                    title='Our Products'
                    body='Only the best products for you'/>
                <Container>
                    <Filters />
                    <Item xs={12}>
                        <Products list={this.props.wines} />
                    </Item>
                </Container>
            </div>
        );
    }

    
}

const mapStateToProps = (store: IApplicationState) => {
    return {
        loading: store.products.loading,
        wines: store.products.wines
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProducts: () => dispatch(getProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);