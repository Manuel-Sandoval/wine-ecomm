import { ActionCreator } from 'redux';
import { ICartAddItemAction, 
    CartActionTypes, 
    ICartDeleteItemAction, 
    ICartChangeQtyAction, 
    ICartSumQtyAction, 
    ICartReduceQtyAction } from './CartTypes'
import ICartItem from '../../components/CartItems/CartItem/IProps';

export const addItem: ActionCreator<ICartAddItemAction> = (wine: ICartItem) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        product: wine
    }
}

export const deleteItem: ActionCreator<ICartDeleteItemAction> = (wine: ICartItem) => {
    return {
        type: CartActionTypes.DELETE_ITEM,
        product: wine
    }
}

export const changeQty: ActionCreator<ICartChangeQtyAction> = (wine: ICartItem, qty: number) => {
    return {
        type: CartActionTypes.CHANGE_QTY,
        payload: {
            product: wine,
            qty
        }
    }
}

export const sumQty: ActionCreator<ICartSumQtyAction> = (wine: ICartItem) =>  {
    return {
        type: CartActionTypes.SUM_QTY,
        product: wine
    }
}

export const reduceQty: ActionCreator<ICartReduceQtyAction> = (wine: ICartItem) => {
    return {
        type: CartActionTypes.REDUCE_QTY,
        product: wine
    }
}