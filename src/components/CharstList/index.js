import React from 'react';
import BoxComponent from "../Box";

const CharstList = ({ dataChars, handleVotes }) => {
	return (

		<div className="voting-boxes">
			{
				!!dataChars.length ? (
					<React.Fragment>
						{
							dataChars.map(char => {
								return (
									<div className="voting-boxes_box" key={char.id} >
										<BoxComponent
											dataChar={char}
											handleVotesList={(opc) => handleVotes(opc)}
										/>
									</div>
								)
							})
						}
					</React.Fragment>
				) : null
			}



			<div className="clear"></div>
		</div>
	);
};

export default CharstList;



