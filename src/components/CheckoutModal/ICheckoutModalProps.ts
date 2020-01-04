import { emptyInfo } from "../../store/checkout/CheckoutActions";
import { ICheckoutUserInfo, ICheckoutPaymentInfo, ICheckoutSummary } from "../../store/checkout/CheckoutTypes";

export default interface IProps {
    modalOpen: boolean;
    userInfo: ICheckoutUserInfo;
    paymentInfo: ICheckoutPaymentInfo;
    summaryInfo: ICheckoutSummary;
    cancel: typeof emptyInfo;
}