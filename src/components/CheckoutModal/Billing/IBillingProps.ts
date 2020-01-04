import { storeUser } from "../../../store/checkout/CheckoutActions";
import { ICheckoutUserInfo } from "../../../store/checkout/CheckoutTypes";

export default interface IProps {
    userInfo: ICheckoutUserInfo;
    wrapperClass?: string;
    storeUserInfo: typeof storeUser;
}