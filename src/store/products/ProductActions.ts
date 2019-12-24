import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import mainAPI from '../../middleware/MainService';
import {IProductGetAllAction, 
        IProductLoadingAction, 
        IProductsState, 
        ProductActionTypes,
        IProductSelectBrandAction,
        IProductRemoveBrandAction,
        IProductFilterByBrandAction} from './ProductTypes';

import IWine from '../../components/Products/Product/IProps';

const isLoading: ActionCreator<IProductLoadingAction> = () => (
    {
        type: ProductActionTypes.LOADING
    }
)

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductGetAllAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(isLoading());
        const res = await mainAPI.get('/wines');
        const data  = res.data;
        return dispatch({
            type: ProductActionTypes.GET_ALL,
            products: data
        });
    };
};

export const selectBrand: ActionCreator<IProductSelectBrandAction> = (brand: number) => {

    const brands= [brand]

    return {
        type: ProductActionTypes.SELECT_BRAND,
        brands
    }
}

export const removeBrand: ActionCreator<IProductRemoveBrandAction> = (brand: number) => {

    const brands= [brand]

    return {
        type: ProductActionTypes.REMOVE_BRAND,
        brands
    }
}

export const filterByBrand: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductFilterByBrandAction>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(isLoading());
        const res = await mainAPI.get<IWine[]>('/wines');
        const data = res.data;
        return dispatch({
            type: ProductActionTypes.FILTER_BY_BRANDS,
            products: data
        });
    };
}