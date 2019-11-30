import React, {FC} from 'react';
import Home from '../../layouts/Home/Home';
import About from '../../layouts/About/About';
import Shop from '../../layouts/Shop/Shop';
import Brands from '../../layouts/Brands/Brands';
import Customize from '../../layouts/Customize/Customize';
import Cart from '../../layouts/Cart/Cart';
import {
    Switch,
    Route
  } from "react-router-dom";

import './Layout.scss';

const Layout: FC = () => {
    return (
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/brands" component={Brands}/>
            <Route path="/customize" component={Customize}/>
            <Route path="/Cart" component={Cart}/>
            <Route path="/" component={Home} />
        </Switch>
    );
};

export default Layout;