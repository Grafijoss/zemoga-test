import React from "react";
import { Route, Switch } from "react-router-dom";

import AsyncComponent from "./components/AsyncComponent";

const HomeComponent = AsyncComponent(() => import("./pages/Home"));
const HowWork = AsyncComponent(() => import("./pages/HowWork"));
const PastTrials = AsyncComponent(() => import("./pages/PastTrials"));
const Login = AsyncComponent(() => import("./pages/Login"));

const routes = () => (
	<Switch>
		<Route exact path="/" component={HomeComponent} />
		<Route exact path="/howwork" component={HowWork} />
		<Route exact path="/pasttrials" component={PastTrials} />
		<Route exact path="/login" component={Login} />
	</Switch>
);

export default routes;
