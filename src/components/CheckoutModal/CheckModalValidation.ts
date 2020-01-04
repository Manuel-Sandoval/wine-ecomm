import { ICheckoutUserInfo, ICheckoutPaymentInfo } from "../../store/checkout/CheckoutTypes";

type inputTypes = ICheckoutUserInfo | ICheckoutPaymentInfo

export function inputIsValid(object: inputTypes) : boolean {
    
    type objectKey = keyof inputTypes;

    for (const o in object) {
        const key = (o as objectKey);
        const {requiered, touched, error, id} = object[key];
        console.log(id);
        if (error) {
            return false;
        }

        if (requiered) {
            if (!touched || error) {
                return false;
            }
        }
    }

    return true;
}