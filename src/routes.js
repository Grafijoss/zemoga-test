import React from "react";
import { Route, Switch } from "react-router-dom";

import AsyncComponent from "./components/AsyncComponent";

const HomeComponent = AsyncComponent(() => import("./pages/Home"));

const routes = () => (
	<Switch>
		<Route exact path="/" component={HomeComponent} />
	</Switch>
);

export default routes;
