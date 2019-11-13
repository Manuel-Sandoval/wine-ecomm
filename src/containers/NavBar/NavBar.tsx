import React, { Component } from 'react';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CartIcon from '@material-ui/icons/ShoppingCart';

import IState from './IState';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class NavBar extends Component<{}, IState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            open: false
        };
    }

    public render() {
        return (
            <> 
                <AppBar position='fixed' className='nav-bar'>
                    <Toolbar className='tool-bar'>
                        <IconButton onClick={this.openDrawerHandler} className='icon'>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' className='title'>Wine Store</Typography>
                        <IconButton className='icon'>
                            <CartIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SideDrawer open={this.state.open} close={this.closeDrawerHandler}/>
            </>
        );
    }

    private openDrawerHandler = (): void => {
        this.setState({open: true});
    };

    private closeDrawerHandler = (): void  => {
        this.setState({open: false});
    }

}

export default NavBar;