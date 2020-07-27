import React, { Component } from "react";
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

	render() {
		return (
			<div className={`wrrp-header ${this.state.openMenu ? "open" : null}`}>
				<div className="container">
					<h1 className="name-company">
						Rule of thumb.
					</h1>
					<nav className="nav-main">
						<div className="item-nav">
							<button>
								Past Trials
								</button>
						</div>
						<div className="item-nav">
							<button>
								How It Works
								</button>
						</div>
						<div className="item-nav">
							<button>
								Log In / Sing In
								</button>
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
