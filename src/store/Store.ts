import { ICartState } from "./cart/CartTypes";
import { combineReducers, Store, createStore, applyMiddleware } from "redux";
import { cartReducer } from "./cart/CartReducer";
import { IProductsState } from "./products/ProductTypes";
import { productsReducer } from "./products/ProductReducer";
import thunk from 'redux-thunk'

export interface IApplicationState {
    cart: ICartState,
    products: IProductsState
}

const rootReducer = combineReducers<IApplicationState>({
    cart: cartReducer,
    products: productsReducer
});

const configureStore = (): Store<IApplicationState> => (
    createStore(rootReducer, undefined, applyMiddleware(thunk))
);

export default configureStore;