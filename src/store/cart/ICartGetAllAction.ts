import { CartActionTypes } from "./CartActionTypes";
import IWine from '../../components/Products/IProps';

export default interface ICartGetAllAction {
    type: CartActionTypes.GET_ALL,
    wines: IWine[]
}