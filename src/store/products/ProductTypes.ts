import IWine from '../../components/Products/Product/IProps'

export enum ProductActionTypes {
    GET_ALL = 'PRODUCTS/GET_ALL',
    LOADING = 'PRODUCTS/LOADING',
    FILTER_BY_BRAND = 'PRODUCT/FILTER_BY_BRAND'
} 

export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL;
    products: IWine[]
}

export interface IProductLoadingAction {
    type: ProductActionTypes.LOADING;
}

export interface IProductFilterByBrandAction {
    type: ProductActionTypes.FILTER_BY_BRAND;
    brands: number[]
}

export type ProductsActions = IProductGetAllAction | IProductLoadingAction | IProductFilterByBrandAction;

export interface IProductsState {
    readonly wines: IWine[];
    readonly loading: boolean;
}