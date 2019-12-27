import { getProducts, selectBrand, removeBrand, filterByBrand } from "../../store/products/ProductActions";
import { IProductInfo } from "../../store/products/ProductTypes";
import ICart from "../../components/CartItems/CartItem/IProps";

export default interface IProps {
    loading: boolean;
    wines:  IProductInfo[];
    selectedBrands: number[];
    getProducts: typeof getProducts;
    selectBrand: typeof selectBrand;
    removeBrand: typeof removeBrand;
    filterByBrand: typeof filterByBrand;
    cartProducts: ICart[];
}