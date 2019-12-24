import React, {SFC} from 'react';
import { Drawer, FormControl, FormGroup, ListItem, IconButton, Divider, Typography } from '@material-ui/core';
import FilterItem from './FilterItem/FilterItem'
import IProps from './IFilterProps';
import CloseIcon from '@material-ui/icons/ArrowForwardIos';

const Filters: SFC<IProps> = props => {

    return (
        <Drawer variant='persistent'
                anchor='right'
                open={props.open}>
            <ListItem>
                <IconButton onClick={props.onClose}>
                    <CloseIcon />
                </IconButton>
                <Typography variant='button'>Brands</Typography>
            </ListItem>
            <Divider />
            <FormControl component="fieldset">
                <FormGroup>
                    {
                        props.list.map((v) =>{
                            return <FilterItem key={v.id} id={v.id} brandName={v.name} select={props.select} remove={props.remove}/>;
                        })
                    }
                </FormGroup>
            </FormControl>
        </Drawer>
    );
}

export default Filters;