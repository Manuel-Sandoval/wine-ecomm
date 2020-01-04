import IPaymentInfo from './IPaymentInfo';

export default interface IOrder {
    fullName: string;
    email: string;
    address: string;
	city: string;
    state: string;
    zip: number;
	paymentInfo: IPaymentInfo;
	winesId: number[];
}

