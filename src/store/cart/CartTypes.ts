import ICartItem from '../../components/CartItems/CartItem/IProps';

export enum CartActionTypes {
    ADD_ITEM = 'CART/ADD_ITEM',
    SUM_QTY = 'CART/SUM_QTY',
    REDUCE_QTY = 'CART/REDUCE_QTY',
    DELETE_ITEM = 'CART/DELETE_ITEM',
    CHANGE_QTY = 'CART/CHANGE_QTY'
}

export interface ICartAddItemAction {
    type: CartActionTypes.ADD_ITEM;
    product: ICartItem;
}

export interface ICartDeleteItemAction {
    type: CartActionTypes.DELETE_ITEM;
    product: ICartItem;
}

export interface ICartChangeQtyAction {
    type: CartActionTypes.CHANGE_QTY;
    payload: {
        product: ICartItem,
        qty: number
    };
}

export interface ICartSumQtyAction {
    type: CartActionTypes.SUM_QTY;
    product: ICartItem;
}

export interface ICartReduceQtyAction {
    type: CartActionTypes.REDUCE_QTY;
    product: ICartItem;
}

export type CartActions = ICartAddItemAction | ICartDeleteItemAction | ICartChangeQtyAction | ICartSumQtyAction | ICartReduceQtyAction;

export interface ICartState {
    readonly products: ICartItem[];
}