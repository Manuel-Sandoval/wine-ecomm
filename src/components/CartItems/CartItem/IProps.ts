import IWine from '../../Products/Product/IProps'

export default interface ICart {
    wine: IWine;
    quantity: number;
}

export interface ICartProps extends ICart {
    removeItem: (cartItem: ICart) => void;
    changeQty: (cartItem: ICart, qty: number) => void;
    sumQty: (cartItem: ICart) => void;
    reduceQty: (cartItem: ICart) => void;
}