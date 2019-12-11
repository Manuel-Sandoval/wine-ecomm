import React, {Component} from 'react';

import {CssBaseline} from '@material-ui/core'
import {StylesProvider} from '@material-ui/styles'
import Scrollspy from 'react-scrollspy'
import NavBar from '../NavBar/NavBar';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

class App extends Component {

	public render(): JSX.Element {
		return (
			<div onScrollCapture={this.headerHandler}>
				<StylesProvider injectFirst={true}>
					<CssBaseline/>
					<Router>
						<div id='header'>
							<Header />
						</div>

						<Scrollspy items={ ['header'] } currentClassName='hidden' scrolledPastClassName='display'>
							<div>
								<NavBar />
							</div>
						</Scrollspy>	
						<Layout />
					</Router>
				</StylesProvider>
			</div>
		);
	}

	private headerHandler = () : void => {
		console.log('handling')
	}
}

export default App;
