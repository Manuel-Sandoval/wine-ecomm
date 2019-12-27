import { ActionCreator } from 'redux';

import {
    CheckoutActionTypes,
    ICheckoutAdvanceStepAction,
    ICheckoutBackStepAction,
    ICheckoutPopulateSummaryAction,
    ICheckoutStoreUserAction,
    ICheckoutStorePaymentAction,
    ICheckoutSummary,
    ICheckoutUserInfo,
    ICheckoutPaymentInfo,
    ICheckoutEmptyInfoAction
} from './CheckoutTypes'

export const advanceStep: ActionCreator<ICheckoutAdvanceStepAction> = () => (
    {
        type: CheckoutActionTypes.ADVANCE_STEP
    }
)

export const backStep: ActionCreator<ICheckoutBackStepAction> = () => (
    {
        type: CheckoutActionTypes.BACK_STEP
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