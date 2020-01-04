import { Reducer } from 'redux';
import { CheckoutActionTypes, CheckoutActions, ICheckoutState } from './CheckoutTypes';

const initialState: ICheckoutState = {
    checkoutOpen: false,
    summary: {
        items: []
    },
    userInfo: {
        fullName: {
            id: 'fullName',
            value: '', 
            error: false, 
            touched: false,
            requiered: true
        },
        email: {
            id: 'email',
            value: '',
            error: false, 
            touched: false,
            requiered: true
        },
        address: {
            id: 'address',
            value: '', 
            error: false, 
            touched: false,
            requiered: true
        },
        city: {
            id: 'city',
            value: '', 
            error: false, 
            touched: false,
            requiered: true
        },
        state: {
            id: 'state',
            value: '', 
            error: false, 
            touched: false,
            requiered: true
        },
        zip: {
            id: 'address',
            value: '', 
            error: false, 
            touched: false,
            requiered: true,
            limit: 5,
        }
    },
    paymentInfo: {
        cardNumber: {
            id: 'cardNumber',
            value: '', 
            error: false, 
            touched: false, 
            limit: 16,
            requiered: true
        },
        cardHolderName: {
            id: 'cardHolderName',
            value: '', 
            error: false, 
            touched: false, 
            requiered: true
        },
        expirationMonth: {
            id: 'expirationMonth',
            value: '', 
            error: false, 
            touched: false, 
            limit: 2,
            requiered: true
        },
        expirationYear: {
            id: 'expirationYear',
            value: '', 
            error: false, 
            touched: false, 
            limit: 2,
            requiered: true
        },
        secretCode: {
            id: 'secretCode',
            value: '', 
            error: false, 
            touched: false, 
            limit: 4,
            requiered: true
        }
    }
}

export const checkoutReducer: Reducer<ICheckoutState, CheckoutActions> = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case CheckoutActionTypes.CHECKOUT_OPEN:
            return {
                ...state,
                checkoutOpen: true
            }
        case CheckoutActionTypes.POPULATE_SUMMARY:
            return {
                ...state,
                summary: action.summary
            }
        case CheckoutActionTypes.STORE_USER_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case CheckoutActionTypes.STORE_PAYMENT:
            return {
                ...state,
                paymentInfo: action.paymentInfo
            }
        case CheckoutActionTypes.EMPTY_INFO:
            return {
                ...initialState
            }
        default:
            return state;
    }
}