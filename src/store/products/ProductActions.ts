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

export const getProducts: = () => {

};
