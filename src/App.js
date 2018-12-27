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
		const outcome = /(sunk)/;
		// console.log(compAttack);
		if (outcome.test(compAttack) === true) {
			document.getElementById('score-board').innerHTML = compAttack;
		}

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
		const fire = user.attack(e.target.innerHTML, computer);
		const outcome = /(sunk)/;
		// console.log(fire);
		if (outcome.test(fire) === true) {
			document.getElementById('score-board').innerHTML = fire;
		}

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

		setTimeout(() => {
			this.computer_attack();
		}, 200);

		return (e.target.disabled = true);
	}
	render() {
		return (
			<div className='App'>
				<header className='App-header'>Battleship</header>
				<section id='score-board' />
				<GameUI onClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
