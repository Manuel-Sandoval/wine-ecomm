import React, { Component } from 'react';

import {Slide} from '@material-ui/core';

import hero from '../../assets/images/wine-ecommerce-hero.jpg';

class Home extends Component {
    public render() {
        return (
            <div>
                <img src={hero} />
                

                Hero Image -> Best brands -> Popular wines -> News letter
            </div>
        );
    }
}

export default Home;