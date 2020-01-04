import { ICheckoutPaymentInfo } from "../../../store/checkout/CheckoutTypes";
import { storePayment } from "../../../store/checkout/CheckoutActions";

export default interface IProps {
    wrapperClass?: string;
    paymentInfo: ICheckoutPaymentInfo;
    storePaymentInfo: typeof storePayment;

}