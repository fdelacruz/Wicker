/* jshint esnext: true */

import React from 'react';
import {RouteHandler} from 'react-router';

import Login from './Login';

export default class App extends React.Component {
	state = { user: USER } // class property (state) instead of getInitialState, ES7 experimental feature

	render () {
		return <div>
			<div className='row'>
				<div className='three columns'>
					<h1> Wicker </h1>
					
					<Login user={this.state.user} setUser={this.setUser} />

					PageList
				</div>
				<div className='nine columns'>
					<RouteHandler user={this.state.user} />
				</div>
			</div>
		</div>;
	}
	setUser = (user) => this.setState({ user: user });
}
