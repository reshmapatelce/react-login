import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Datatable from '../pages/Datatable';
import Register from '../pages/Register';
import Login from '../pages/Login';

class Content extends Component {
	render() {
		return (
			<div className="content m-5">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/datatable" component={Datatable} />
					<Route path="/register" component={Register} />
				</Switch>
			</div>
		)
	}
}

export default Content;