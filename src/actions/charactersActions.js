import {
	SET_CHARACTERS,
	ERROR,
	RESET
} from "../types/charactersTypes";

export const setData = data => async dispatch => {
	try {
		dispatch({
			type: SET_CHARACTERS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: "Error"
		});
	}
};

export const resetData = () => async dispatch => {
	dispatch({
		type: RESET
	});
};
