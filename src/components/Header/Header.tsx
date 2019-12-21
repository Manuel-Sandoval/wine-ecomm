import React, {SFC} from 'react';
import {AppBar} from '@material-ui/core';
import { logo } from '../../assets/images';
import './Header.scss'
import {NavLink, Link} from 'react-router-dom';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';

const links = [
    {ref:'/shop', text:'Shop'},
    {ref:'/brands', text:'Brands'},
    {ref:'/cart', text:'Cart'}
];

const Header : SFC = () => {

    return (
        <AppBar className='app-bar' position='static'>
            <Container>
                <Item xs={12}>
                    <div className='logo-container'>
                        <Link to='/'><img src={logo.src} alt={logo.title}/></Link>
                    </div>
                </Item>
                <Item xs={12} className='links'>
                    {links.map((v,i) => {
                        return <NavLink key={i} to={v.ref} className='link' activeClassName='active'>{v.text}</NavLink>
                    })}             
                </Item>
            </Container>
        </AppBar>
        
    )
}

export default Header;