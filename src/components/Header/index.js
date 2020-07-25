import React, { Component } from "react";
import "./index.scss";

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="wrrp-header">
				<div className="container">
					<h1 className="name-company">
						Rule of thumb.
					</h1>
					<nav className="nav-main">
						<ul>
							<li>

							</li>
						</ul>
					</nav>
				</div>
			</div>
		);
	}
}

export default HeaderComponent;
