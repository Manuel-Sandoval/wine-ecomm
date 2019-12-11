import React, {FC} from 'react';

import { Drawer, List, ListItem, IconButton, ListItemIcon, Typography, Divider } from '@material-ui/core';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import BrandIcon from '@material-ui/icons/Deck';
import CloseIcon from '@material-ui/icons/Close';
import ShopIcon from '@material-ui/icons/Queue';

import styles from './SideDrawer.module.scss';

import IProps from './IProps';

const drawerList = [
    {icon: <HomeIcon/>, text: 'Home', link: '/'},
    {icon: <ShopIcon/>, text: 'Shop', link: '/shop'},
    {icon: <BrandIcon/>, text: 'Brands', link: '/brands'}
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
                    <Divider/>
                    {
                        drawerList.map((content, index) => {
                            return (
                                <Link to={content.link} key={index} className={styles.Links}>
                                    <ListItem button={true}>
                                        <ListItemIcon>{content.icon}</ListItemIcon>
                                        <Typography>{content.text}</Typography>
                                    </ListItem>
                                </Link>
                            );
                        })
                    }
                </List>
            </Drawer>
        </div>
    );
}

export default SideDrawer;