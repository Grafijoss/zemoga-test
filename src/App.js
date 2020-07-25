import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import 'normalize.css';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Router basename={process.env.REACT_APP_ROUTER_BASE || ""}>
				<HeaderComponent />
				<AppRoutes />
				<FooterComponent />
			</Router>
		</div>
	);
}

export default App;
