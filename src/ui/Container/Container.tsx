import React, {FC} from 'react';
import Grid, { GridProps } from '@material-ui/core/Grid';

const Container: FC<GridProps> = (props: GridProps) => <Grid container={true} {...props}/>;

export default Container;