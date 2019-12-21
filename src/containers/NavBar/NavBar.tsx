import React, { Component } from 'react';

import { AppBar, Toolbar,  Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CartButton from '../../components/CartButton/CartButton';
import IState from './IState';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

import './NavBar.scss';

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
                        <CartButton to='/cart'/>
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