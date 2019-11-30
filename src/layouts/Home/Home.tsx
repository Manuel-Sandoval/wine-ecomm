import React, { Component } from 'react';

class Home extends Component {
    public render() {
        return (
            <div>
                
                {
                    new Array(500).fill(null).map((v: number, i: number) => (<li key={i}>{i}</li>))
                }

                
            </div>
        );
    }
}

export default Home;