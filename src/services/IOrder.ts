import IPaymentInfo from './IPaymentInfo';

export default interface IOrder {
    address: string;
	firstName: string;
	middleName?: string;
	lastName: string;
	phoneNumber: number;
	paymentInfo: IPaymentInfo;
	winesId: number[];
}

