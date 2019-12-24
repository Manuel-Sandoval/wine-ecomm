import { Reducer } from 'redux';
import { IProductsState, ProductsActions, ProductActionTypes } from './ProductTypes';

const initialProductState: IProductsState = {
    wines: [],
    selectedBrands: [],
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
        case ProductActionTypes.SELECT_BRAND:
            return {
                ...state,
                selectedBrands: state.selectedBrands.concat(action.brands)
            }
        case ProductActionTypes.REMOVE_BRAND:
            return {
                ...state,
                selectedBrands: state.selectedBrands.filter( b => !action.brands.includes(b))
            }
        case ProductActionTypes.FILTER_BY_BRANDS:

            let updatedArray = action.products;
            if (state.selectedBrands.length > 0) {
                updatedArray = action.products.filter(w => state.selectedBrands.includes(w.brand.id))
            }

            return {
                ...state,
                wines: updatedArray,
                loading: false
            }
        default:
            return state;
    }
}