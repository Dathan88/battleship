import React, { Component } from 'react';
import Ship from './Functions/ship-factory';
import './App.css';

const fleet = {
	aircraftCarrier: { name: 'Aircraft Carrier', length: 5 },
	battleship: { name: 'Battleship', length: 4 },
	sub: { name: 'Submarine', length: 3 },
	cruiser: { name: 'Cruiser', length: 3 },
	destoyer: { name: 'Destroyer', length: 2 },
};

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>Battleship</header>
			</div>
		);
	}
}

export default App;
