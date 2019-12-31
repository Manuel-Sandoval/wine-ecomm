import ICartItem from '../../components/CartItems/CartItem/IProps';
import { addItem, deleteItem } from '../../store/cart/CartActions';

export default interface IPDPProps {
    cartItems: ICartItem[];
    addItemToCart: typeof addItem;
    removeFromCart: typeof deleteItem;
}