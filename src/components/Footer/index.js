import React, { Component } from "react";
import "./index.scss";

class FooterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<React.Fragment>
				<div className="top_40"></div>
				<footer className="main-footer">
					<div className="container">
						<div className="content">
							<nav className="main-footer_site-map">
								<button>
									Terms and Conditions
								</button>
								<button>
									Privacy Policy
								</button>
								<button>
									Contact Us
								</button>
							</nav>
							<nav className="main-footer_social">
								<p>
									Follow Us
								</p>
								<button>
									<img
										alt="test"
										src={`${process.env.PUBLIC_URL}/images/icons/social/icon-face.png`}
									></img>
								</button>
								<button>
									<img
										alt="test"
										src={`${process.env.PUBLIC_URL}/images/icons/social/icon-tw.png`}
									></img>
								</button>
							</nav>
						</div>
					</div>
				</footer>
			</React.Fragment>
		);
	}
}

export default FooterComponent;
