import { getProducts, selectBrand, removeBrand, filterByBrand } from "../../store/products/ProductActions";
import IWine from '../../components/Products/Product/IProps';

export default interface IProps {
    loading: boolean;
    wines: IWine[];
    selectedBrands: number[];
    getProducts: typeof getProducts;
    selectBrand: typeof selectBrand;
    removeBrand: typeof removeBrand;
    filterByBrand: typeof filterByBrand
}