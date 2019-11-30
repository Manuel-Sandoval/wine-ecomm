import React, {Component} from 'react';

import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/core/styles'
import Scrollspy from 'react-scrollspy'
import NavBar from '../NavBar/NavBar';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';

import './App.scss';

class App extends Component {

	public render(): JSX.Element {
		return (
			<div onScrollCapture={this.headerHandler}>
				<CssBaseline/>
				<StylesProvider injectFirst={true}>
					
					<div id='header'>
						<Header />
					</div>

					<Scrollspy items={ ['header'] } currentClassName='hidden' scrolledPastClassName='display'>
						<div>
							<NavBar />
						</div>
					</Scrollspy>	
					<Layout />
				</StylesProvider>
			</div>
		);
	}

	private headerHandler = () : void => {
		console.log('handling')
	}
}

export default App;
