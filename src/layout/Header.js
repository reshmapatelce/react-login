import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<NavLink className="nav-link" activeClassName="active" to="/register" >Register</NavLink>
							<NavLink className="nav-link" activeClassName="active" to="/datatable" >Datatable</NavLink>
						</div>
					</div>
				</nav>
			</React.Fragment >
		)
	}
}

export default withRouter(Header);