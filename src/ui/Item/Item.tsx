import React, {FC} from 'react';
import Grid from '@material-ui/core/Grid';

const Item: FC = (props) => <Grid item={true} {...props}/>;

export default Item;