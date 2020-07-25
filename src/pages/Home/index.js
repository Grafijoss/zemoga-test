import React, { Component } from "react";
import "./index.scss";

class HomeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="wrrp-home">
				<h1>Este es el Home</h1>
			</div>
		);
	}
}

export default HomeComponent;
