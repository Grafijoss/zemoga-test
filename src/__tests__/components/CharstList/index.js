import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CharstList from "../../../components/CharstList";

it('No lista los personajes cuando no hay data', () => {
	const chars = []
	const wrapper = shallow(<CharstList dataChars={chars} />)
	expect(wrapper.find(".voting-boxes_box").length).toBe(0);
});

it('Lista los personajes cuando hay data', () => {
	const chars = [
		{
			"id": 1,
			"name": "Kanye West",
			"work": "Entertaiment",
			"date": "20200701",
			"description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
			"thumb": "/images/profiles/char_1.png",
			"likeVotes": 0,
			"noLIkeVotes": 0
		},
		{
			"id": 2,
			"name": "Mark Zuckenberg",
			"work": "Bussines",
			"date": "20200701",
			"description": "We have purged your fear. You are ready to Iead these men. You are ready to become a member of the League of Shadows.",
			"thumb": "/images/profiles/char_2.png",
			"likeVotes": 0,
			"noLIkeVotes": 0
		}
	]
	const wrapper = shallow(<CharstList dataChars={chars} />)
	expect(wrapper.find(".voting-boxes_box").length).toBe(2);
});