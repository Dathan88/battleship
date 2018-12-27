import React, { Component } from 'react';
import GameUI from './Components/GameUI/GameUI';
import { user, computer } from './Factories/player';
import './App.css';
import './Components/GameUI/Board/Squares/Squares.css';
import './Components/GameUI/Board/Board.css';
import './Components/GameUI/Board/BoardHeader/BoardHeader.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	computer_attack = () => {
		const compAttack = computer.random_attack(user);
		console.log(compAttack);

		computer.shots_hit.forEach(el => {
			document.getElementById('computer-' + el).style.backgroundColor = 'red';
			document.getElementById('computer-' + el).style.color = 'black';
		});

		computer.shots_missed.forEach(el => {
			document.getElementById('computer-' + el).style.backgroundColor = 'white';
			document.getElementById('computer-' + el).style.color = 'black';
		});
	};

	handleClick(e) {
		console.log(user.attack(e.target.innerHTML, computer));

		user.shots_hit.forEach(el => {
			if (e.target.innerHTML === el) {
				// console.log(user.shots_hit);
				e.target.className = 'hit';
			}
		});

		user.shots_missed.forEach(el => {
			if (e.target.innerHTML === el) {
				// console.log(user.shots_missed);
				e.target.className = 'miss';
			}
		});
		this.computer_attack();
		return (e.target.disabled = true);
	}
	render() {
		return (
			<div className='App'>
				<header className='App-header'>Battleship</header>
				<GameUI onClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
