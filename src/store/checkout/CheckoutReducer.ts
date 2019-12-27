import { Reducer } from 'redux';
import { CheckoutActionTypes, CheckoutActions, ICheckoutState } from './CheckoutTypes';

const initialState: ICheckoutState = {
    summary: {
        items: []
    },
    userInfo: {
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    },
    paymentInfo: {
        cardNumber: '',
        cardAddress: '',
        expirationMonth: '',
        expirationYear: '',
        secretCode: ''
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