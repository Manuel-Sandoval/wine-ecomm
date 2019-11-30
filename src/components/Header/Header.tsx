import React, {SFC} from 'react';
import {AppBar, Link} from '@material-ui/core'
import { logo } from '../../assets/images'
import SignButton from '../SignButton/SignButton';
import CartButton from '../CartButton/CartButton';
import './Header.scss'
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';

const Header : SFC = () => {
    return (
        <AppBar className='app-bar' position='static'>
            <Container>
                <Item xs={11}>
                    <div className='logo-container'>
                        <img src={logo.src} alt={logo.title}/>
                    </div>
                </Item>
                <Item xs={1}>
                    <SignButton />
                </Item>
                <Item xs={11} className='links'>
                    <Link href='#' className='link active'>About</Link>
                    <Link href='#' className='link'>Shop</Link>
                    <Link href='#' className='link'>Brands</Link>
                    <Link href='#' className='link'>Customize</Link>                    
                </Item>
                <Item xs={1}>
                    <CartButton />
                </Item>
            </Container>
        </AppBar>
        
    )
}

export default Header;