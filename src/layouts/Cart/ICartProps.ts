import ICartItem from '../../components/CartItems/CartItem/IProps';

export default interface IProps {
    products: ICartItem[];
    emptyInfo: () => void;
}