import { createStore, applyMiddleware, compose } from "redux";

import reduxThunk from "redux-thunk";
// import { multiClientMiddleware } from "redux-axios-middleware";

import { persistStore } from "redux-persist";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);

export default store;
