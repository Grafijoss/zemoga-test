import React from 'react';
import { shallow } from 'enzyme';

import BoxComponent from "../../../components/Box";

it('No se muestra el nombre del personaje', () => {
	const char = {}
	const wrapper = shallow(<BoxComponent dataChar={char} />)
	expect(wrapper.find('.name').text()).toBe('');
});

it('Se muestra el nombre del personaje', () => {
	const char = {
		"id": 1,
		"name": "Kanye West",
		"work": "Entertaiment",
		"date": "20200701",
		"description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
		"thumb": "/images/profiles/char_1.png",
		"likeVotes": 0,
		"noLIkeVotes": 0
	}
	const wrapper = shallow(<BoxComponent dataChar={char} />)
	expect(wrapper.find('.name').text()).toBe('Kanye West');
});