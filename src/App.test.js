import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EmojiResults from './EmojiResults';
import SearchInput from './SearchInput';
import Header from './Header';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('contains Header, SearchInput, EmojiResults', () => {
	const wrapper = shallow(<App />);

	expect(wrapper.find(EmojiResults).length).toEqual(1);
	expect(wrapper.find(SearchInput).length).toEqual(1);
	expect(wrapper.find(Header).length).toEqual(1);
});
