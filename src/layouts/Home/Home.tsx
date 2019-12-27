import React, { Component } from 'react';

import SectionPresentation from '../../components/SectionPresentation/SectionPresentation'

import {heroImg3 as HeroImg} from '../../assets/images';
import Container from '../../ui/Container/Container';
import mainAPI from '../../middleware/MainService';
import Products from '../../components/Products/Products';
import Brands from '../../components/Brands/Brands';

import ClientOpinions from '../../components/ClientOpinions/ClientOpinions';
import IState from './IState';
import IBrand from '../../components/Brands/Brand/IProps';

import styles from './Home.module.scss';
import { connect } from 'react-redux';
import { IApplicationState } from '../../store/Store';
import IProps from './IHomeProps';
import { getBestProducts } from '../../store/products/ProductActions';
import { CircularProgress } from '@material-ui/core';

class Home extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            brands: []
        };
    }

    public render() {

        let loading = (
            <div className={styles.SpinnerContainer}>
                <CircularProgress color="secondary" size={200}/>
            </div>
        );

        if (!this.props.isLoading) {
            loading = <Products list={this.props.wines.map(v => {
                const value = v;
                value.isInCart = this.props.cartProducts.filter(data => data.wine.id === v.wine.id).length > 0;
                return value;
            })} />
        }

        return (
            <div>
                <Container justify='center'>
                    <img src={HeroImg.src} alt={HeroImg.title}/>
                </Container>
                <SectionPresentation 
                    showLink={true} 
                    title='Our Products'
                    body='Only the best products for you'
                    to='/shop'
                    linkText='Visit our store'
                    className={styles.SectionPresentation}/>
                {loading}
                <SectionPresentation 
                    showLink={true} 
                    title='Our Brands'
                    body='Only the best brands for you'
                    to='/brands'
                    linkText='Check our brands'
                    className={styles.SectionPresentation}/>
                <Brands list={this.state.brands}/>
                <SectionPresentation 
                    title='Client reviews'
                    body='What our clients says about us'
                    className={styles.SectionPresentation}/>
                <ClientOpinions />
            </div>
        );
    }

    public componentDidMount() {

        this.props.getBestProducts();
             
        mainAPI.get<IBrand[]>('/best/brands')
             .then(response => {
                this.setState({brands: response.data});
             })
             .catch(err => {
                console.log(err);
             })
    }

}

const mapStateToProps = (store: IApplicationState) => {
    return {
        wines: store.products.wines,
        isLoading: store.products.loading,
        cartProducts: store.cart.products
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getBestProducts: () => dispatch(getBestProducts())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);