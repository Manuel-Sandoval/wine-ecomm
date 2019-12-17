import { ICartState } from "./cart/CartTypes";
import { combineReducers, Store, createStore } from "redux";
import { cartReducer } from "./cart/CartReducer";

export interface IApplicationState {
    cart: ICartState
}

const rootReducer = combineReducers<IApplicationState>({
    cart: cartReducer
});

const configureStore = (): Store<IApplicationState> => {
    const store = createStore(rootReducer);
    return store;
}

export default configureStore;