import { ActionCreator, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import mainAPI from '../../middleware/MainService';
import {IProductGetAllAction, 
        IProductLoadingAction, 
        IProductsState,
        IProductInfo,
        ProductActionTypes,
        IProductSelectBrandAction,
        IProductRemoveBrandAction,
        IProductFilterByBrandAction,
        IProductGetBestAction} from './ProductTypes';
import IWine from '../../components/Products/Product/IProps';

const isLoading: ActionCreator<IProductLoadingAction> = () => (
    {
        type: ProductActionTypes.LOADING
    }
)

export const getProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductGetAllAction>> = () => {
    return fetchProducts (ProductActionTypes.GET_ALL, '/wines');
};

export const getBestProducts: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductGetBestAction>> = () => {
    return fetchProducts (ProductActionTypes.GET_BEST, '/best/wines');
};

export const selectBrand: ActionCreator<IProductSelectBrandAction> = (brand: number) => {

    const brands = [brand];

    return {
        type: ProductActionTypes.SELECT_BRAND,
        brands
    };
}

export const removeBrand: ActionCreator<IProductRemoveBrandAction> = (brand: number) => {

    const brands= [brand];

    return {
        type: ProductActionTypes.REMOVE_BRAND,
        brands
    };
}

export const filterByBrand: ActionCreator<ThunkAction<Promise<AnyAction>, IProductsState, null, IProductFilterByBrandAction>> = () => {
    return fetchProducts(ProductActionTypes.FILTER_BY_BRANDS, '/wines');
}

const fetchProducts = (productType: ProductActionTypes, call: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(isLoading());
        const res = await mainAPI.get<IWine[]>(call);
        const data = res.data.map(v => {
            const product: IProductInfo = {
                wine: v,
                isInCart: false
            };
            return product;
        });
        return dispatch({
            type: productType,
            products: data
        });
    }
}