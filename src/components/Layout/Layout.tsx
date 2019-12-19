import React, {FC} from 'react';
import Home from '../../layouts/Home/Home';
import Shop from '../../layouts/Shop/Shop';
import Brands from '../../layouts/Brands/Brands';
import Cart from '../../layouts/Cart/Cart';
import PDP from '../../layouts/PDP/PDP'
import Register from '../../layouts/Register/Register'
import {
    Switch,
    Route
  } from "react-router-dom";

import './Layout.scss';

const Layout: FC = () => {
    return (
        <Switch>
            <Route path='/PDP/:id' component={PDP}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/brands' component={Brands}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/sign' component={Register} />
            <Route path='/' component={Home} />
        </Switch>
    );
};

export default Layout;