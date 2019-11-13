import React, {FC} from 'react';
import Home from '../../layouts/Home/Home';

import './Layout.scss';

const Layout: FC = () => {
    return (
        <div className='layout'>
            <Home />
        </div>
    );
};

export default Layout;