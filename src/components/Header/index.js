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
			</div>
		);
	}
}

export default HeaderComponent;
