import { storePayment } from "../../../../store/checkout/CheckoutActions";
import { ICheckoutPaymentInfo } from "../../../../store/checkout/CheckoutTypes";

export default interface IProps {
    paymentInfo: ICheckoutPaymentInfo;
    setDisable: (disable: boolean) => void;
    storePaymentInfo: typeof storePayment
}