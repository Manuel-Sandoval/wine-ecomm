import { ICheckoutUserInfo } from "../../../../store/checkout/CheckoutTypes";
import { storeUser } from "../../../../store/checkout/CheckoutActions";

export default interface IProps {
    userInfo: ICheckoutUserInfo;
    setDisable: (disable: boolean) => void;
    storeUser: typeof storeUser;
}