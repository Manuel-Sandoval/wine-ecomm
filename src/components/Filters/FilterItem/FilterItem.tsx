import React, { SFC, ChangeEvent } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import IProps from './IProps';
import styles from './FilterItem.module.scss'

const FilterItem: SFC<IProps> = (props) => {

    const onSelect = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void  => {
        if (checked) {
            props.select(props.id);
        } else {
            props.remove(props.id);
        }
    }

    return (
        <FormControlLabel 
            value='end' 
            control={<Checkbox onChange={onSelect}/>}
            label={props.brandName}
            labelPlacement='end'
            className={styles.Item}/>
        
    );
}

export default FilterItem;