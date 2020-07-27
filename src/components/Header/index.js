import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import "./index.scss";

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false
		};

	}

	componentDidMount() {
	}

	openMenuFn() {
		this.setState({
			openMenu: !this.state.openMenu
		})
	}

	closeMenuFn() {
		this.setState({
			openMenu: false
		})
	}

	render() {
		return (
			<div className={`wrrp-header ${this.state.openMenu ? "open" : null}`}>
				<div className="container">
					<h1 className="name-company">
						<NavLink to="/" onClick={this.closeMenuFn.bind(this)}> Rule of thumb. </NavLink>
					</h1>
					<nav className="nav-main">
						<div className="item-nav">
							<NavLink to="/pasttrials" onClick={this.closeMenuFn.bind(this)}> Past Trials </NavLink>
						</div>
						<div className="item-nav">
							<NavLink to="/howwork" onClick={this.closeMenuFn.bind(this)}> How It Works </NavLink>
						</div>
						<div className="item-nav">
							<NavLink to="/login" onClick={this.closeMenuFn.bind(this)}> Log In / Sing In </NavLink>
						</div>
						<div className="item-nav search">
							<button>
								<img
									alt="test"
									src={`${process.env.PUBLIC_URL}/images/icons/icon-search.png`}
								></img>
							</button>
						</div>
					</nav>
				</div>
				<button
					className="bt-menu-movil"
					onClick={this.openMenuFn.bind(this)}
				>
					{
						this.state.openMenu ? (
							<strong>X</strong>
						) : (
								<span>&#9776;</span>
							)
					}
				</button>
				<div
					className="cover"
					onClick={this.openMenuFn.bind(this)}
				></div>
			</div>
		);
	}
}

export default HeaderComponent;
