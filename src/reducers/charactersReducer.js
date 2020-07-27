import {
	SET_CHARACTERS,
	// LOADING,
	// ERROR,
	RESET
} from "../types/charactersTypes";

const INITIAL_STATE = {
	chacarters: [],
	error: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CHARACTERS:
			return {
				...state,
				chacarters: action.payload,
				error: false
			};
		case RESET:
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};
