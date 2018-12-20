import React, { Component } from 'react';
import GameUI from './Sandbox/GameUI.sandbox';
import './App.css';
import './Components/GameUI/GameUI.css';
import './Components/GameUI/Board/Squares/Squares.css';
import './Components/GameUI/Board/Board.css';
import './Components/GameUI/Board/Board.css';
import './Components/GameUI/Board/BoardHeader/BoardHeader.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>Battleship</header>
				<GameUI />
			</div>
		);
	}
}

export default App;
