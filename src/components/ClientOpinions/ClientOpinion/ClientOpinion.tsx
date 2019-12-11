import React, {SFC} from 'react';
import { Typography, Paper } from '@material-ui/core';
import IProps from './IProps';

import './ClientOpinion.scss';

const ClientOpinion: SFC<IProps> = (props) => {
    return (
        <Paper>
            <div className='image-container'>
                <img src={props.avatar} alt={props.sign} className='avatar'/>
            </div>
            <Typography variant='subtitle1' className='review'>{props.children}</Typography>
            <Typography variant='subtitle2' className='sign'>{props.sign}</Typography>
        </Paper>
    );
}

export default ClientOpinion;