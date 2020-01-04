import { ActionCreator } from 'redux';

import {
    CheckoutActionTypes,
    ICheckoutPopulateSummaryAction,
    ICheckoutStoreUserAction,
    ICheckoutStorePaymentAction,
    ICheckoutSummary,
    ICheckoutUserInfo,
    ICheckoutPaymentInfo,
    ICheckoutEmptyInfoAction,
    ICheckoutOpenAction
} from './CheckoutTypes'

export const checkoutOpen: ActionCreator<ICheckoutOpenAction> = () => (
    {
        type: CheckoutActionTypes.CHECKOUT_OPEN
    }
)

export const populateSummary: ActionCreator<ICheckoutPopulateSummaryAction> = (summary: ICheckoutSummary) => (
    {
        type: CheckoutActionTypes.POPULATE_SUMMARY,
        summary
    }
)

export const storeUser: ActionCreator<ICheckoutStoreUserAction> = (userInfo: ICheckoutUserInfo) => (
    {
        type: CheckoutActionTypes.STORE_USER_INFO,
        userInfo
    }
)

export const storePayment: ActionCreator<ICheckoutStorePaymentAction> = (paymentInfo: ICheckoutPaymentInfo) => (
    {
        type: CheckoutActionTypes.STORE_PAYMENT,
        paymentInfo
    }
)

export const emptyInfo: ActionCreator<ICheckoutEmptyInfoAction> = () => (
    {
        type: CheckoutActionTypes.EMPTY_INFO
    }
)