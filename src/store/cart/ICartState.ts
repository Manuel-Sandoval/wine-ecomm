import IWine from '../../components/Products/IProps';

export default interface ICartState {
    readonly wines: IWine[];
    readonly cartLoading: boolean;
}