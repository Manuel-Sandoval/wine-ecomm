export default interface IPaymentInfo {
    cardNumber: number;
    cardHolderName: string;
	expirationMonth: number;
	expirationYear: number;
	secretCode: number;
}