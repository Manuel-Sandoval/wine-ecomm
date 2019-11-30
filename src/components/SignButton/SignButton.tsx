import React, {SFC} from 'react';
import {IconButton} from '@material-ui/core'
import UserIcon from '@material-ui/icons/Person'
import '../../styles/IconButtons.scss'

const SignButton : SFC = () => {
    return (
        <IconButton className='icon-default'>
            <UserIcon/>
        </IconButton>
    );
}

export default SignButton;