import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


test('Renderiza el componente App', () => {
	shallow(<App />);
});
