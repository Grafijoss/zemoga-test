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
				<section
					className="featured-survey"
					style={{
						backgroundImage: `url("${process.env.PUBLIC_URL}/images/featured/pope.jpg")`
					}}>
					<div className="container">
						<div className="feautered-box">
							<div className="feautered-box_content">
								<hgroup>
									<h4>What´s your opinon on </h4>
									<h1>Pope Francis?</h1>
									<div className="top_40"></div>
									<p>
										He's talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
									</p>
									<div className="top_30"></div>
									<a class="wiki">
										<img
											alt="test"
											src={`${process.env.PUBLIC_URL}/images/icons/icon-wiki.png`}
										></img>
										More information
									</a>
									<div className="top_40"></div>
									<h3>What's Your Veredict?</h3>
								</hgroup>
							</div>
							<div className="feautered-box_buttons">
								<button className="like">
									<img
										alt="test"
										src={`${process.env.PUBLIC_URL}/images/icons/thumb.png`}
									></img>
								</button>
								<button className="nolike">
									<img
										alt="test"
										src={`${process.env.PUBLIC_URL}/images/icons/thumb_down.png`}
									></img>
								</button>
								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="deadline">
						<div className="container">
							<div className="deadline_info">
								<div className="deadline_closing">
									<p>CLOSING IN</p>
								</div>
								<div className="deadline_days">
									<p><strong>22</strong>days</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="top_40"></div>
				<div className="container">
					<section className="wrrp-instructions">
						<div className="content">
							<div className="wrrp-instructions_titles">
								<hgroup>
									<h3>Speak out. Be heard.</h3>
									<div className="clear"></div>
									<h2 class="msg-title">Be counted</h2>
								</hgroup>
							</div>
							<div className="wrrp-instructions_description">
								<p>
									Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
								</p>
							</div>
						</div>
						<button className="wrrp-instructions_close">
							<img
								alt="test"
								src={`${process.env.PUBLIC_URL}/images/close.png`}
							></img>
						</button>
					</section>
				</div>

			</div>
		);
	}
}

export default HomeComponent;
