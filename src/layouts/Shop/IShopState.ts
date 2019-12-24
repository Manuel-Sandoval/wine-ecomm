import { IBrandItem } from "../../components/Filters/IFilterProps";

export default interface IState {
    drawerOpen: boolean;
    brands: IBrandItem[];
}