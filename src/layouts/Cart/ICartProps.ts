import ICartItem from '../../components/CartItems/CartItem/IProps';
import { populateSummary, checkoutOpen } from '../../store/checkout/CheckoutActions';

export default interface IProps {
    products: ICartItem[];
    checkoutOpen: boolean;
    openCheckout: typeof checkoutOpen;
    populateSummary: typeof populateSummary;
}