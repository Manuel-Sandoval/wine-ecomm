import { ICartState } from "./cart/CartTypes";
import { combineReducers, Store, createStore, applyMiddleware } from "redux";
import { cartReducer } from "./cart/CartReducer";
import { IProductsState } from "./products/ProductTypes";
import { productsReducer } from "./products/ProductReducer";
import thunk from 'redux-thunk'
import { ICheckoutState } from "./checkout/CheckoutTypes";
import { checkoutReducer } from "./checkout/CheckoutReducer";

export interface IApplicationState {
    cart: ICartState,
    products: IProductsState,
    checkout: ICheckoutState
}

const rootReducer = combineReducers<IApplicationState>({
    cart: cartReducer,
    products: productsReducer,
    checkout: checkoutReducer
});

const configureStore = (): Store<IApplicationState> => (
    createStore(rootReducer, undefined, applyMiddleware(thunk))
);

export default configureStore;