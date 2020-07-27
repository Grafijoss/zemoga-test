import React, { Component } from "react";
import "./index.scss";

const LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb.png`;
const NO_LIKE = `${process.env.PUBLIC_URL}/images/icons/thumb_down.png`;

class BoxComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			voted: false,
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
		this.setState({
			voted: true
		})
		this.props.handleVotes({
			id: this.props.dataChar.id,
			opc: this.state.selected
		});
	}

	voteAgain() {
		this.setState({
			selected: null,
			voted: false
		})
	}

	render() {

		const {
			voted,
			selected
		} = this.state;

		const {
			name,
			work,
			// date,
			description,
			thumb,
			likeVotes,
			noLIkeVotes
		} = this.props.dataChar;

		const totalVotes = noLIkeVotes + likeVotes;

		const percentageLike = Math.round(Math.ceil(100 * likeVotes) / totalVotes);
		const percentageNoLike = Math.round(Math.ceil(100 * noLIkeVotes) / totalVotes);

		return (
			<div className="wrrp-box">
				<img
					alt="test"
					className="char"
					src={`${process.env.PUBLIC_URL}${thumb}`}
				></img>
				<div className="wrrp-box_content">

					<div className="wrrp-box_titles">
						{totalVotes > 0 ? (
							<div className={`button-vote ${likeVotes > noLIkeVotes ? "bg-like" : "bg-nolike"}`}>
								<img
									alt="test"
									src={likeVotes > noLIkeVotes ? LIKE : NO_LIKE}
								></img>
							</div>
						) : null}
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

						{!voted ? (
							<React.Fragment>
								<button
									className={`button-vote bg-like ${selected === "like" ? "active" : null}`}
									onClick={() => this.selectedFun("like")}
								>
									<img
										alt="test"
										src={LIKE}
									></img>
								</button>
								<button
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
							</React.Fragment>
						) : (
								<button
									className="button-border"
									onClick={this.voteAgain.bind(this)}
								>
									Vote again
								</button>
							)}

					</div>

					<div className="wrrp-box_votes">
						{
							percentageLike > 0 ? (
								<div
									className="percentage bg-like"
									style={{
										width: `${percentageLike}%`
									}}
								>
									{percentageLike > 26 ? (
										<React.Fragment>
											<img
												alt="test"
												src={LIKE}
											></img>
											<p>{percentageLike}</p>
										</React.Fragment>
									) : null}
								</div>
							) : null
						}
						{
							percentageNoLike > 0 ? (
								<div
									className="percentage bg-nolike"
									style={{
										width: `${percentageNoLike}%`
									}}
								>
									{percentageNoLike > 26 ? (
										<React.Fragment>
											<img
												alt="test"
												src={NO_LIKE}
											></img>
											<p>{percentageNoLike}</p>
										</React.Fragment>
									) : null}
								</div>
							) : null
						}
						<div className="clear"></div>
					</div>


				</div>
			</div>

		);
	}
}

export default BoxComponent;
