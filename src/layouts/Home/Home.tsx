import React, { Component } from 'react';

import SectionPresentation from '../../components/SectionPresentation/SectionPresentation'

import {heroImg3 as HeroImg} from '../../assets/images';
import Container from '../../ui/Container/Container';
import mainAPI from '../../middleware/MainService';
import Products from '../../components/Products/Products';
import Brands from '../../components/Brands/Brands';

import ClientOpinions from '../../components/ClientOpinions/ClientOpinions';
import IState from './IState';
import IWine from '../../components/Products/Product/IProps';
import IBrand from '../../components/Brands/Brand/IProps';

class Home extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            wines: [],
            brands: []
        };
    }

    public render() {
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
                    linkText='Visit our store'/>
                <Products list={this.state.wines}/>
                <SectionPresentation 
                    showLink={true} 
                    title='Our Brands'
                    body='Only the best brands for you'
                    to='/brands'
                    linkText='Check our brands'/>
                <Brands list={this.state.brands}/>
                <SectionPresentation 
                    title='Client reviews'
                    body='What our clients says about us'/>
                <ClientOpinions />
            </div>
        );
    }

    public componentDidMount() {

        mainAPI.get<IWine[]>('/best/wines')
             .then(response => {
                this.setState({wines: response.data});
             })
             .catch(err => {
                 console.log(err);
             });
             
        mainAPI.get<IBrand[]>('/best/brands')
             .then(response => {
                this.setState({brands: response.data});
             })
             .catch(err => {
                console.log(err);
             })
    }

}

export default Home;