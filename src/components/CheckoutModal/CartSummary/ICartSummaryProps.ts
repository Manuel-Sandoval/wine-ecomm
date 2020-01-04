import { ICheckoutSummary } from "../../../store/checkout/CheckoutTypes";

export default interface IProps {
    wrapperClass?: string;
    summary: ICheckoutSummary;
}