import IBrand from '../../components/Brands/Brand/IProps';
import IWine from '../../components/Products/Product/IProps';

export default interface IState {
    wines: IWine[];
    brands: IBrand[];
}

