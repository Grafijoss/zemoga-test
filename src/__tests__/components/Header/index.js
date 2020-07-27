import React from 'react';
import { render } from '@testing-library/react';
// import { shallow, mount } from 'enzyme';

import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from "../../../components/Header";
// import App from "../../../App";

it('Existen todos los links', () => {

	const { getByText } = render(
		<Router>
			<HeaderComponent />
		</Router>
	);

	const linkElement = getByText(/Rule of thumb./i);
	expect(linkElement).toBeInTheDocument();

	const linkElement2 = getByText(/Past Trials/i);
	expect(linkElement2).toBeInTheDocument();

	const linkElement3 = getByText(/How It Works/i);
	expect(linkElement3).toBeInTheDocument();

	const linkElement4 = getByText(/Log In/i);
	expect(linkElement4).toBeInTheDocument();

});
