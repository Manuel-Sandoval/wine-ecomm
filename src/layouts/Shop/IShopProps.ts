import { getProducts } from "../../store/products/ProductActions";
import IWine from '../../components/Products/Product/IProps';

export default interface IProps {
    loading: boolean;
    wines: IWine[];
    getProducts: typeof getProducts;
}