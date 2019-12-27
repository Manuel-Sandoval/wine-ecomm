import ICartItem from '../../components/CartItems/CartItem/IProps';

export enum CheckoutActionTypes {
    ADVANCE_STEP='CHECKOUT/ADVANCE_STEP',
    BACK_STEP='CHECKOUT/BACK_STEP',
    POPULATE_SUMMARY='CHECKOUT/POPULATE_SUMMARY',
    STORE_USER_INFO='CHECKOUT/STORE_USER_INFO',
    STORE_PAYMENT='CHECKOUT/STORE_PAYMENT',
    EMPTY_INFO='CHECKOUT/EMPTY_INFO'
}

export interface ICheckoutAdvanceStepAction {
    type: CheckoutActionTypes.ADVANCE_STEP;
}

export interface ICheckoutBackStepAction {
    type: CheckoutActionTypes.BACK_STEP;
}

export interface ICheckoutPopulateSummaryAction {
    type: CheckoutActionTypes.POPULATE_SUMMARY;
    summary: ICheckoutSummary;
}

export interface ICheckoutStoreUserAction {
    type: CheckoutActionTypes.STORE_USER_INFO;
    userInfo: ICheckoutUserInfo;
}

export interface ICheckoutStorePaymentAction {
    type: CheckoutActionTypes.STORE_PAYMENT;
    paymentInfo: ICheckoutPaymentInfo;
}

export interface ICheckoutEmptyInfoAction {
    type: CheckoutActionTypes.EMPTY_INFO;
}

export type CheckoutActions = ICheckoutAdvanceStepAction |
                              ICheckoutBackStepAction |
                              ICheckoutPopulateSummaryAction |
                              ICheckoutStoreUserAction |
                              ICheckoutStorePaymentAction |
                              ICheckoutEmptyInfoAction;

export interface ICheckoutState {
    readonly summary: ICheckoutSummary;
    readonly userInfo: ICheckoutUserInfo;
    readonly paymentInfo: ICheckoutPaymentInfo;
    readonly currentStep: number;
    readonly totalSteps: number;
}

export interface ICheckoutSummary {
    items: ICartItem[]
}

export interface ICheckoutUserInfo {
    firstName: string;
    middleName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
}

export interface ICheckoutPaymentInfo {
    cardNumber: string;
    cardAddress: string;
    expirationMonth: string;
    expirationYear: string;
    secretCode: string;
}