import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './main-header.module.css';
import { Icon } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";


const MainHeader = ({ ...props }) => {

	let history = useHistory();

	const logout = () => {
		history.push('/HSBBPortal/');
	}

	return (
		<>
			{/*		style={{backgroundColor:'#e0e9f5'}}*/}
			<header className={classes.uppermostnav}>
				<div>Business Hub</div>
				<Icon name='log out'
					size={'large'}
					style={{
						'color': 'white', 'cursor': 'pointer', paddingTop: 3,
						float: 'right'
					}}
					onClick={logout}
				/>
			</header>
			<header className={classes.topnav}>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/coverage-check">Coverage Check</NavLink>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/order">Orders</NavLink>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/transfer-request">Transfer</NavLink>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/demand-list/search">Demand List</NavLink>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/support">Support</NavLink>
				<NavLink activeClassName={classes.active} to="/HSBBPortal/admin">Admin</NavLink>

				{/*<nav>
				<ul>
					<li>
					</li>
					<li>
					</li>
				</ul>*/}
				{/*<ul>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/coverage-check">Coverage Check</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/order">Orders</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/transfer-request">Transfer</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/demand-list/search">Demand List</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/support">Support</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/admin">Admin</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/HSBBPortal/admin">Admin</NavLink>
					</li>
				</ul>*/}

			</header>
		</>
	);
}

export default MainHeader;





