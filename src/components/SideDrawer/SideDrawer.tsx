import React, {FC} from 'react';

import { Drawer, List, ListItem, IconButton, ListItemIcon, Typography } from '@material-ui/core';
import AboutIcon from '@material-ui/icons/Business';
import WishIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import ShopIcon from '@material-ui/icons/Queue';

import IProps from './IProps';

const drawerList = [
    {icon: <HomeIcon/>, text: 'Home'},
    {icon: <AboutIcon/>, text: 'About'},
    {icon: <ShopIcon/>, text: 'Shop'},
    {icon: <WishIcon/>, text: 'Customize'}
];

const SideDrawer: FC<IProps> = (props) => {
    return (
        <div>
            <Drawer variant='persistent' open={props.open}>
                <List>
                    <ListItem>
                        <IconButton onClick={props.close}>
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                    {
                        drawerList.map((content, index) => {
                            return (
                                <ListItem button={true} key={index}>
                                    <ListItemIcon>{content.icon}</ListItemIcon>
                                    <Typography>{content.text}</Typography>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>
        </div>
    );
}

export default SideDrawer;