import ICartItem from '../../components/CartItems/CartItem/IProps';

export enum CartActionTypes {
    ADD_ITEM = 'CART/ADD_ITEM'
}

export interface ICartAddItemAction {
    type: CartActionTypes.ADD_ITEM;
    product: ICartItem;
}

export type CartActions = ICartAddItemAction;

export interface ICartState {
    readonly products: ICartItem[];
}