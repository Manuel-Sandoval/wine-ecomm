import ICartItem from '../../components/CartItems/CartItem/IProps';
import { populateSummary } from '../../store/checkout/CheckoutActions';

export default interface IProps {
    products: ICartItem[];
    emptyInfo: () => void;
    populateSummary: typeof populateSummary;
}