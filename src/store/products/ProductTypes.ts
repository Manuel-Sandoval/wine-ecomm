import IWine from '../../components/Products/Product/IProps'

export enum ProductActionTypes {
    GET_ALL = 'PRODUCTS/GET_ALL',
    LOADING = 'PRODUCTS/LOADING',
    FILTER_BY_BRANDS = 'PRODUCTS/FILTER_BY_BRANDS',
    SELECT_BRAND = 'PRODUCTS/SELECT_BRAND',
    REMOVE_BRAND = 'PRODUCTS/REMOVE_BRAND'
} 

export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL;
    products: IWine[]
}

export interface IProductLoadingAction {
    type: ProductActionTypes.LOADING;
}

export interface IProductSelectBrandAction {
    type: ProductActionTypes.SELECT_BRAND;
    brands: number[];
}

export interface IProductRemoveBrandAction {
    type: ProductActionTypes.REMOVE_BRAND;
    brands: number[];
}

export interface IProductFilterByBrandAction {
    type: ProductActionTypes.FILTER_BY_BRANDS;
    products: IWine[]
}

export type ProductsActions = IProductGetAllAction | 
                              IProductLoadingAction | 
                              IProductSelectBrandAction | 
                              IProductRemoveBrandAction |
                              IProductFilterByBrandAction;

export interface IProductsState {
    readonly wines: IWine[];
    readonly selectedBrands: number[];
    readonly loading: boolean;
}