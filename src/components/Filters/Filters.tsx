import React, {SFC} from 'react';
import { Drawer, FormControl, FormGroup } from '@material-ui/core';
import FilterItem from './FilterItem/FilterItem'

import styles from './Filters.module.scss';

const Filters: SFC = () => {
    return (
        <Drawer variant='persistent'
                anchor='right'
                open={true}>
            <FormControl component="fieldset">
                <FormGroup>
                </FormGroup>
            </FormControl>
        </Drawer>
    );
}

export default Filters;