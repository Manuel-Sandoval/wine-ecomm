import React, { Component } from 'react';
import Container from '../../ui/Container/Container';
import Item from '../../ui/Item/Item';
import Auth from '../../containers/Auth/Auth';

class Register extends Component {
    public render() {
        return (
            <div>
                <Container>
                    <Item xs={12} md={6}>
                        <Auth />
                    </Item>
                </Container>
            </div>
        );
    }
}

export default Register;