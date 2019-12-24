import { selectBrand, removeBrand } from "../../store/products/ProductActions";

export interface IBrandItem {
    id: number;
    name: string;
}

export default interface IProps {
    open: boolean;
    onClose: () => void;
    list: IBrandItem[];
    select: typeof selectBrand;
    remove: typeof removeBrand;
}