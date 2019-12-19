import React, { SFC } from 'react';
import '../../styles/IconButtons.scss'
import { IconButton } from '@material-ui/core';
import UserIcon from '@material-ui/icons/Person'
import { Link } from 'react-router-dom';

const UserButton: SFC = () => {

    const route='/sign';

    return (
        <Link to={route}>
            <IconButton className='icon-default'>
                <UserIcon/>
            </IconButton>
        </Link>
    );
}

export default UserButton;