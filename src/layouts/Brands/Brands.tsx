import React, { Component } from 'react';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import ProductBrands from '../../components/Brands/Brands';
import IState from './IState';
import IBrand from '../../components/Brands/Brand/IProps'
import mainAPI from '../../middleware/MainService';

class Brands extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            brands: []
        }
    }

    public render() {
        return (
            <div>
                <SectionPresentation 
                    title='Our Brands'
                    body='Only the best brands for you'/>
                <ProductBrands list={this.state.brands}/>
            </div>
        );
    }

    public componentDidMount() {
        mainAPI.get<IBrand[]>('/brands')
                .then(res => {
                    this.setState({brands: res.data});
                })
                .catch(err => {
                    console.log(err);
                }); 
    }

}

export default Brands;