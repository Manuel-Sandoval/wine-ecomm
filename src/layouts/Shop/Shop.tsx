import React, { Component } from 'react';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import IState from './IState';
import Products from '../../components/Products/Products';
import mainAPI from '../../middleware/MainService';
import IWine from '../../components/Products/Product/IProps';

class Shop extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            wines: []
        }
    }

    public render() {
        return (
            <div>
                <SectionPresentation 
                    title='Our Products'
                    body='Only the best products for you'/>
                <Products list={this.state.wines} />
            </div>
        );
    }

    public componentDidMount() {
        mainAPI.get<IWine[]>('/wines')
            .then(res => {
                this.setState({wines: res.data});
            })
            .catch(err => {
                console.log(err);
            });

    }
}

export default Shop;