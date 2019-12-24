import React, { Component } from 'react';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import Products from '../../components/Products/Products';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Filters from '../../components/Filters/Filters';
import {IApplicationState} from '../../store/Store';
import { getProducts, selectBrand, removeBrand, filterByBrand } from '../../store/products/ProductActions';
import IShopProps from './IShopProps';
import { connect } from 'react-redux';
import { Fab, CircularProgress } from '@material-ui/core';
import styles from './Shop.module.scss';
import TopIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/MenuOpen';
import IShopState from './IShopState';
import { IBrandItem } from "../../components/Filters/IFilterProps";
import IBrand from '../../components/Brands/Brand/IProps';
import mainAPI from '../../middleware/MainService';

class Shop extends Component<IShopProps, IShopState> {

    constructor (props: IShopProps) {
        super(props);

        this.state = {
            drawerOpen: false,
            brands: []
        }
    }

    public componentDidMount () {

        console.log('[ComponentDidMount: Shop]');

        this.props.getProducts();

        mainAPI.get<IBrand[]>('/brands')
                .then(res => {
                    const brandItems: IBrandItem[] = res.data.map( (v) => {
                        return {id: v.id, name: v.name};
                    })
                    this.setState({brands: brandItems});
                })
                .catch(err => {
                    console.log(err);
                }); 

    }

    public componentDidUpdate(prevProps: IShopProps) {
        if (this.props.selectedBrands.length !== prevProps.selectedBrands.length) {
            console.log('[ComponentDidUpdate]: Shop');
            this.props.filterByBrand();
        }
    }

    public render() {

        let toTopStyle = styles.ActionButtons;
        let loading = (
            <div className={styles.SpinnerContainer}>
                <CircularProgress color="secondary" size={200}/>
            </div>
        );

        if (!this.props.loading) {
            loading = <Products list={this.props.wines} />
        }

        if (this.state.drawerOpen) {
            toTopStyle = styles.ActionButtonsLeft;
        }

        return (
            <div>
                <SectionPresentation 
                    title='Our Products'
                    body='Only the best products for you'
                    className={styles.Title}/>
                <Container>
                    <Filters open={this.state.drawerOpen} 
                             onClose={this.drawerStateHandler} 
                             list={this.state.brands}
                             select={this.props.selectBrand}
                             remove={this.props.removeBrand}/>
                    <Item xs={12}>
                        {loading}
                    </Item>
                    <div className={toTopStyle}>
                        <Fab className={styles.FloatButton} onClick={this.scrollToTopHandler} size='medium' color='secondary'>
                            <TopIcon />
                        </Fab>
                        {this.state.drawerOpen ||
                            <Fab className={styles.FloatButton} onClick={this.drawerStateHandler} size='medium' color='secondary'>
                                <MenuIcon/>
                            </Fab>
                        }
                    </div>
                </Container>
            </div>
        );
    }

    private scrollToTopHandler() {
        document.body.scrollTop = 0; // safari uses this
        document.documentElement.scrollTop = 0; // the other browser listens to this
    }

    private drawerStateHandler = () => {        
        const drawerState = this.state.drawerOpen;
        this.setState({drawerOpen: !drawerState});
    }

}

const mapStateToProps = (store: IApplicationState) => {
    return {
        loading: store.products.loading,
        wines: store.products.wines,
        selectedBrands: store.products.selectedBrands
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getProducts: () => dispatch(getProducts()),
        selectBrand: (id: number) => dispatch(selectBrand(id)),
        removeBrand: (id: number) => dispatch(removeBrand(id)),
        filterByBrand: () => dispatch(filterByBrand())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);