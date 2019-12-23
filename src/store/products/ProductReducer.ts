import { Reducer } from 'redux';
import { IProductsState, ProductsActions, ProductActionTypes } from './ProductTypes';

const initialProductState: IProductsState = {
    wines: [],
    loading: false
}

export const productsReducer: Reducer<IProductsState, ProductsActions>  = (
    state = initialProductState, 
    action
) => {
    switch (action.type) {
        case ProductActionTypes.LOADING:
            return {
                ...state,
                loading: true
            }
        case ProductActionTypes.GET_ALL:
            return {
                ...state,
                wines: action.products,
                loading: false
            }
        default:
            return state;
    }
}