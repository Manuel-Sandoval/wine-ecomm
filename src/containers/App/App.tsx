import React, {Component} from 'react';

import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/core/styles'
import NavBar from '../NavBar/NavBar';
import Layout from '../../components/Layout/Layout';

import './App.scss';

class App extends Component {

	public render(): JSX.Element {
		return (
			<>
				<CssBaseline/>
				<StylesProvider injectFirst={true}>
					<NavBar />
					<Layout />
				</StylesProvider>
			</>
		);
	}
}

export default App;
