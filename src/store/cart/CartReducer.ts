import { Reducer } from 'redux';
import { ICartState, CartActions, CartActionTypes} from './CartTypes';

const intialCartState: ICartState = {
    products: []
}

export const cartReducer: Reducer<ICartState, CartActions> = (
    state = intialCartState,
    action
) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                products: state.products.concat(action.product) 
            }
        default:
            return state;
    }
}