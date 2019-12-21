import React, { Component } from 'react';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import IState from './IState';
import Products from '../../components/Products/Products';
import mainAPI from '../../middleware/MainService';
import IWine from '../../components/Products/Product/IProps';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Filters from '../../components/Filters/Filters';

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
                <Container>
                    <Filters />
                    <Item xs={12}>
                        <Products list={this.state.wines} />
                    </Item>
                </Container>
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