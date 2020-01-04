import ICartItem from '../../components/CartItems/CartItem/IProps';

export enum CheckoutActionTypes {
    CHECKOUT_OPEN='CHECKOUT/CHECKOUT_OPEN',
    POPULATE_SUMMARY='CHECKOUT/POPULATE_SUMMARY',
    STORE_USER_INFO='CHECKOUT/STORE_USER_INFO',
    STORE_PAYMENT='CHECKOUT/STORE_PAYMENT',
    EMPTY_INFO='CHECKOUT/EMPTY_INFO'
}

export interface ICheckoutOpenAction {
    type: CheckoutActionTypes.CHECKOUT_OPEN;
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

export type CheckoutActions = ICheckoutOpenAction |
                              ICheckoutPopulateSummaryAction |
                              ICheckoutStoreUserAction |
                              ICheckoutStorePaymentAction |
                              ICheckoutEmptyInfoAction;

export interface ICheckoutSummary {
    items: ICartItem[]
}

export interface IFieldInfo {
    id: string;
    value: string; 
    error: boolean;
    touched: boolean;
    requiered: boolean;
}

export interface ILimitNumber extends IFieldInfo{
    limit: number;
}

export interface ICheckoutUserInfo {
    fullName: IFieldInfo;
    email: IFieldInfo;
    address: IFieldInfo;
    city: IFieldInfo;
    state: IFieldInfo;
    zip: ILimitNumber;
}

export interface ICheckoutPaymentInfo {
    cardNumber: ILimitNumber;
    cardHolderName: IFieldInfo;
    expirationMonth: ILimitNumber;
    expirationYear: ILimitNumber;
    secretCode: ILimitNumber;
}

export interface ICheckoutState {
    readonly checkoutOpen: boolean;
    readonly summary: ICheckoutSummary;
    readonly userInfo: ICheckoutUserInfo;
    readonly paymentInfo: ICheckoutPaymentInfo;
}
