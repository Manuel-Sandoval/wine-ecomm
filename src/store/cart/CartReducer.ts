import { Reducer } from 'redux';
import { ICartState, CartActions, CartActionTypes} from './CartTypes';

const intialCartState: ICartState = {
    products: []
}

export const cartReducer: Reducer<ICartState, CartActions> = (
    state = intialCartState,
    action
) => {

    const updateQty = (qty: number, id: number) => (
        state.products.map(cartItem => {
            if (cartItem.wine.id !== id) {
                return cartItem;
            }
            return {
                ...cartItem,
                quantity: qty
            }
        })
    )

    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                products: state.products.concat(action.product) 
            }
        case CartActionTypes.DELETE_ITEM:
            return {
                ...state,
                products: state.products.filter(cartItem => cartItem.wine.id !== action.product.wine.id)
            }
        case CartActionTypes.CHANGE_QTY:
            return {
                ...state,
                products: updateQty(action.payload.qty, action.payload.product.wine.id)
            }
        case CartActionTypes.SUM_QTY:
            return {
                ...state,
                products: updateQty(action.product.quantity + 1, action.product.wine.id)
            }

        case CartActionTypes.REDUCE_QTY:
            return {
                ...state,
                products: updateQty(action.product.quantity - 1, action.product.wine.id)
            }

        default:
            return state;
    }
}