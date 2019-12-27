import { IProductInfo } from "../../store/products/ProductTypes";
import { getBestProducts } from "../../store/products/ProductActions";
import ICart from "../../components/CartItems/CartItem/IProps";

export default interface IProps {
    wines:  IProductInfo[];
    isLoading: boolean;
    getBestProducts: typeof getBestProducts;
    cartProducts: ICart[];
}