import React, {FC} from 'react';
import Home from '../../layouts/Home/Home';
import Shop from '../../layouts/Shop/Shop';
import Brands from '../../layouts/Brands/Brands';
import Cart from '../../layouts/Cart/Cart';
import PDP from '../../layouts/PDP/PDP';
import {
    Switch,
    Route
  } from "react-router-dom";

const Layout: FC = () => {
    return (
        <Switch>
            <Route path='/PDP/:id' component={PDP}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/brands' component={Brands}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/' component={Home} />
        </Switch>
    );
};

export default Layout;