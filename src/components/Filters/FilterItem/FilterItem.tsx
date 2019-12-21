import React, { SFC } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import IProps from './IProps';

const FilterItem: SFC<IProps> = (props) => {
    return (
        <FormControlLabel 
            value='end' 
            control={<Checkbox onChange={props.select}/>}
            label={props.brandName}
            labelPlacement='end'/>
        
    );
}

export default FilterItem;