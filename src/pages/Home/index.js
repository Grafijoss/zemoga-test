import React, { Component } from "react";
import BoxComponent from "../../components/Box";
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
								<button className="bg-like">
									<img
										alt="test"
										src={`${process.env.PUBLIC_URL}/images/icons/thumb.png`}
									></img>
								</button>
								<button className="bg-nolike">
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
					<section className="instructions">
						<div className="content">
							<div className="instructions_titles">
								<hgroup>
									<h3>Speak out. Be heard.</h3>
									<div className="clear"></div>
									<h2 class="msg-title">Be counted</h2>
								</hgroup>
							</div>
							<div className="instructions_description">
								<p>
									Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
								</p>
							</div>
						</div>
						<button className="instructions_close">
							<img
								alt="test"
								src={`${process.env.PUBLIC_URL}/images/close.png`}
							></img>
						</button>
					</section>
					<div className="top_40"></div>
					<section className="rulings">
						<hgroup>
							<h2>
								Previous Rulings
							</h2>
						</hgroup>
						<div className="top_40"></div>
						<div className="voting-boxes">
							<div className="voting-boxes_box">
								<BoxComponent></BoxComponent>
							</div>
							<div className="voting-boxes_box">
								<BoxComponent></BoxComponent>
							</div>
							<div className="voting-boxes_box">
								<BoxComponent></BoxComponent>
							</div>
							<div className="voting-boxes_box">
								<BoxComponent></BoxComponent>
							</div>
							<div className="clear"></div>
						</div>
						<div className="clear"></div>
					</section>
					<section className="add-anyone">
						<div className="add-anyone_cols">
							<div className="add-anyone_title">
								<p>
									Is there anyone else you would want us to add?
								</p>
							</div>
							<div className="add-anyone_button">
								<button>
									Submite a Name
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default HomeComponent;
