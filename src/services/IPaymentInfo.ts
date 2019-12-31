export default interface IPaymentInfo {
    cardNumber: number;
    cardAddress: string;
	expirationMonth: number;
	expirationYear: number;
	secretCode: number;
}