/* jshint esnext: true */

import React from 'react';
import {RouteHandler} from 'react-router';

export default class App extends React.Component {
	state = { user: USER } // class property (state) instead of getInitialState, ES7 experimental feature

	render () {
		return <div>
			<div className='row'>
				<div className='three columns'>
					<h1> Wicker </h1>
					Login

					PageList
				</div>
				<div className='nine columns'>
					<RouteHandler user={this.state.user} />
				</div>
			</div>
		</div>;
	}
}