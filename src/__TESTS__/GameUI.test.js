import React from 'react';
import ReactDOM from 'react-dom';
import GameUI from '../Components/GameUI';

test('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<GameUI />, div);
	ReactDOM.unmountComponentAtNode(div);
});
