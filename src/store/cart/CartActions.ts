import ICartGetAllAction from './ICartGetAllAction';
import ICartLoadingAction from './ICartLoadingAction';

export type CartActions = | ICartGetAllAction | ICartLoadingAction;