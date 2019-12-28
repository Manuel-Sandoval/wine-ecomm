import { Reducer } from 'redux';
import { CheckoutActionTypes, CheckoutActions, ICheckoutState } from './CheckoutTypes';

const initialState: ICheckoutState = {
    summary: {
        items: []
    },
    userInfo: {
        firstName: {
            id: 'firstName',
            value: '', 
            error: false, 
            touched: false,
            requiered: true
        },
        middleName: {
            id: 'middleName',
            value: '',
            error: false, 
            touched: false,
            requiered: false
        },
        lastName: {
            id: 'lastName',
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
        phoneNumber: {
            id: 'phoneNumber',
            value: '', 
            error: false, 
            touched: false, 
            limit: 10,
            requiered: true
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
        cardAddress: {
            id: 'cardAddress',
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
    },
    currentStep: 0,
    totalSteps: 5
}

export const checkoutReducer: Reducer<ICheckoutState, CheckoutActions> = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case CheckoutActionTypes.ADVANCE_STEP:
            return {
                ...state,
                currentStep: state.currentStep + 1
            }
        case CheckoutActionTypes.BACK_STEP:
            return {
                ...state,
                currentStep: state.currentStep - 1
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