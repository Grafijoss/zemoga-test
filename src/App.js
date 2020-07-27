import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import './App.scss';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
						<HeaderComponent />
						<AppRoutes />
						<FooterComponent />
					</Router>
				</PersistGate>
			</Provider>
		</div >
	);
}

export default App;
