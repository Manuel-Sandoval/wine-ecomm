import React, {Component} from 'react';

import './App.scss';

import NavBar from '../NavBar/NavBar';
import Layout from '../../components/Layout/Layout';

class App extends Component {

	public render(): JSX.Element {
		return (
			<div>
				<NavBar />
				<Layout />
			</div>
		);
	}
}

export default App;
