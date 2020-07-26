import React, { Component } from "react";
import "./index.scss";

const LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb.png`;
const NO_LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb_down.png`;

class BoxComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="wrrp-box">
				<img
					alt="test"
					className="char"
					src={`${process.env.PUBLIC_URL}/images/profiles/char_1.png`}
				></img>
				<div className="wrrp-box_content">

					<div className="wrrp-box_titles">
						<div className="button-vote bg-like">
							<img
								alt="test"
								src={LIKE}
							></img>
						</div>
						<div className="titles-group">
							<p class="name">
								Kanye West
							</p>
							<p className="desc">
								<strong>1 month ago</strong> in Entertaiment
							</p>
						</div>
					</div>

					<div className="wrrp-box_description">
						<p>
							Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.
						</p>
					</div>

					<div className="wrrp-box_buttons">
						<button className="button-vote bg-like">
							<img
								alt="test"
								src={LIKE}
							></img>
						</button>
						<button className="button-vote bg-nolike">
							<img
								alt="test"
								src={NO_LIKE}
							></img>
						</button>
						<button className="button-border">
							Vote now
						</button>
					</div>

					<div className="wrrp-box_votes">
						<div className="percentage bg-like">
							<img
								alt="test"
								src={LIKE}
							></img>
							<p>50</p>
						</div>
						<div className="percentage bg-nolike">
							<img
								alt="test"
								src={NO_LIKE}
							></img>
							<p>50</p>
						</div>
						<div className="clear"></div>
					</div>


				</div>
			</div>

		);
	}
}

export default BoxComponent;
