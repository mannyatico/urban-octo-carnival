import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { BookRating } from './components/book/BookRating';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

test('renders the correct number of stars for book\'s rating (using an integer as rating)', () => {
	const expected = '<p title="3 stars"><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i></p>'

	const rating = shallow(<BookRating rating="3" />);

	expect(rating.html()).toBe(expected);
});

test('renders the correct number of stars for book\'s rating (using a decimal as rating)', () => {
	const expected = '<p title="2 stars"><i class="glyphicon glyphicon-star"></i><i class="glyphicon glyphicon-star"></i></p>'

	const rating = shallow(<BookRating rating="1.65" />);

	expect(rating.html()).toBe(expected);
});