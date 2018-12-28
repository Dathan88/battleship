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

	componentDidMount() {
		document.getElementById('scoreboard').innerHTML = this.players_info();
	}

	userNum = 0;
	compNum = 0;
	players_info = () => {
		return (
			user.name +
			' enemy ships sunk = ' +
			this.userNum +
			' <br> ' +
			computer.name +
			' enemy ships sunk = ' +
			this.compNum
		);
	};

	commentary_array = [];

	update_commentary() {
		let text = '<ul>';

		for (let i = 0; i < this.commentary_array.length; i++) {
			text += '<ul>' + this.commentary_array[i] + '</ul>';
		}

		text += '</ul>';

		if (this.commentary_array.length === 6) {
			this.commentary_array.shift();
		}

		document.getElementById('commentary-display').innerHTML = text;
	}

	computer_attack = () => {
		const compAttack = computer.random_attack(user);
		const sinking = /(sunk)/;
		const shipHit = /(hit)/;

		if (sinking.test(compAttack) === true) {
			this.compNum++;
			this.commentary_array.push(compAttack);
		} else if (shipHit.test(compAttack) === true) {
			this.commentary_array.push('Sir Francis Drake Hit Your Ship');
			computer.shots_hit.forEach(el => {
				document.getElementById('computer-' + el).style.backgroundColor = 'red';
				document.getElementById('computer-' + el).style.color = 'black';
			});
		} else if (
			sinking.test(compAttack) !== true &&
			shipHit.test(compAttack) !== true
		) {
			this.commentary_array.push('Sir Francis Drake Missed');
			computer.shots_missed.forEach(el => {
				document.getElementById('computer-' + el).style.backgroundColor =
					'white';
				document.getElementById('computer-' + el).style.color = 'black';
			});
		}

		this.update_commentary();
		document.getElementById('scoreboard').innerHTML = this.players_info();
	};

	checkHit = e => {
		user.shots_hit.forEach(el => {
			if (e.target.innerHTML === el) {
				e.target.className = 'hit';
			}
		});
	};

	checkMiss = e => {
		user.shots_missed.forEach(el => {
			if (e.target.innerHTML === el) {
				e.target.className = 'miss';
			}
		});
	};

	handleClick(e) {
		const fire = user.attack(e.target.innerHTML, computer);
		const sinking = /(sunk)/;
		const shipHit = /(hit)/;

		if (sinking.test(fire) === true) {
			this.userNum++;
			this.commentary_array.push(fire);
			this.checkHit(e);
		} else if (shipHit.test(fire) === true) {
			this.commentary_array.push("You Hit Sir Francis Drake's ship");
			this.checkHit(e);
		} else if (sinking.test(fire) !== true && shipHit.test(fire) !== true) {
			this.commentary_array.push('You Missed');
			this.checkMiss(e);
		}
		this.update_commentary();

		setTimeout(() => {
			this.computer_attack();
		}, 200);

		document.getElementById('scoreboard').innerHTML = this.players_info();
		return (e.target.disabled = true);
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>Battleship</header>
				<section id='scoreboard' />
				<section id='commentary-display' />
				<GameUI onClick={this.handleClick} />
			</div>
		);
	}
}

export default App;
