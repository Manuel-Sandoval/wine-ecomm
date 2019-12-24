import { selectBrand, removeBrand } from "../../../store/products/ProductActions";

export default interface IProps{
    id: number;
    brandName: string;
    select: typeof selectBrand;
    remove: typeof removeBrand;
}