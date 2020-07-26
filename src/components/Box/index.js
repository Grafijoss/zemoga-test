import React, { Component } from "react";
import "./index.scss";

const LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb.png`;
const NO_LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb_down.png`;

class BoxComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null
		};

		this.selectedFun = this.selectedFun.bind(this);
	}

	componentDidMount() {
	}

	selectedFun(opc) {
		this.setState({
			selected: opc
		})
	}

	voteFun() {
		this.props.handleVotes({
			id: this.props.dataChar.id,
			opc: this.state.selected
		});
	}

	render() {

		const {
			selected
		} = this.state;

		const {
			name,
			work,
			date,
			description,
			thumb,
			likeVotes,
			noLIkeVotes
		} = this.props.dataChar;

		return (
			<div className="wrrp-box">
				<img
					alt="test"
					className="char"
					src={`${process.env.PUBLIC_URL}${thumb}`}
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
							<p className="name">
								{name}
							</p>
							<p className="desc">
								<strong>1 month ago</strong> in <span>{work}</span>
							</p>
						</div>
					</div>

					<div className="wrrp-box_description">
						<p>
							{description}
						</p>
					</div>

					<div className="wrrp-box_buttons">
						<button
							// className="button-vote bg-like"
							className={`button-vote bg-like ${selected === "like" ? "active" : null}`}
							onClick={() => this.selectedFun("like")}
						>
							<img
								alt="test"
								src={LIKE}
							></img>
						</button>
						<button
							// className="button-vote bg-nolike"
							className={`button-vote bg-nolike ${selected === "nolike" ? "active" : null}`}
							onClick={() => this.selectedFun("nolike")}
						>
							<img
								alt="test"
								src={NO_LIKE}
							></img>
						</button>
						{
							!!selected ? (
								<button
									className="button-border"
									onClick={this.voteFun.bind(this)}
								>
									Vote now
								</button>
							) : null
						}
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
