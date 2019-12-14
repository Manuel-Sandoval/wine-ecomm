import ICartItem from './CartItem/IProps';

export default interface IProps {
    isUserAuth: boolean;
    cartItems: ICartItem[];
}