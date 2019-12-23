import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import mainAPI from '../../middleware/MainService';
import {IProductGetAllAction, 
        IProductLoadingAction, 
        IProductFilterByBrandAction, 
        IProductsState, 
        ProductActionTypes} from './ProductTypes';

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
