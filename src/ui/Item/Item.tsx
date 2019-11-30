import React, {FC} from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';

const Item: FC<GridProps> = (props: GridProps) => <Grid item={true} {...props}/>;

export default Item;