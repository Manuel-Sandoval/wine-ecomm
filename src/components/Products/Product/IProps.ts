import IBrand from '../../Brands/Brand/IProps';

export default interface IProps {
    id: number;
    brand: IBrand;
    description: string;
    image: string;
    price: number;
    title: string;
}

export interface IExtendedProps extends IProps {
    addItem: (product: IProps) => void;
}