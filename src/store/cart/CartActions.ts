import { ActionCreator } from 'redux';
import { ICartAddItemAction, CartActionTypes } from './CartTypes'
import ICartItem from '../../components/CartItems/CartItem/IProps';

export const addItem: ActionCreator<ICartAddItemAction> = (wine: ICartItem) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        product: wine
    }
}
