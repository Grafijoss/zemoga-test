import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import charactersReducer from "./charactersReducer";

const storePersistCharacters = {
	key: "characters",
	storage
};

const rootReducer = combineReducers({
	charactersReducer: persistReducer(storePersistCharacters, charactersReducer)
});

export default rootReducer;
