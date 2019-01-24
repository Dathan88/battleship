import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameUI from './Components/GameUI';
import { current_player, user, computer } from './Factories/player';
import './App.css';
import './Components/Squares.css';
import './Components/Board.css';
import './Components/BoardHeader.css';
import './Components/GameUI.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			userNum: 0,
			compNum: 0,
			commentary: '',
			disableApp: '',
			game_over: false,
			squaresClass: 'board-squares',
		};
	}

	componentDidMount() {
		//marks player ships on computer board
		computer.board.fleet.forEach(el => {
			el.coordinates.forEach(element => {
				document
					.getElementById('computer-' + element)
					.setAttribute('class', 'playerShips');
			});
		});
	}

	enemy = () => (current_player() === user ? computer : user);

	commentary_array = [];

	update_kills() {
		this.setState({
			userNum: user.board.kills.length,
			compNum: computer.board.kills.length,
		});
	}

	update_commentary(x) {
		//this.enemy() is player that just fired
		const playerName = this.enemy().name;
		const enemy = current_player().name;
		const kills = this.enemy().board.kills;
		const shipSunk = kills[kills.length - 1];
		const miss = this.enemy().name + ' missed';
		const hit = playerName + ' damaged ' + enemy + "'s ship";
		const sinking = playerName + ' sunk ' + enemy + "'s " + shipSunk;

		switch (x) {
			case null:
				this.commentary_array.push(miss);
				break;
			case false:
				this.commentary_array.push(hit);
				break;
			case true:
				this.commentary_array.push(sinking);
				this.update_kills();
				this.checkWin();
				break;
			default:
				console.log('update_commentary switch error');
		}

		if (this.commentary_array.length === 6) {
			this.commentary_array.shift();
		}

		const text = this.commentary_array.map((x, i) => (
			<React.Fragment key={i}>
				{x}
				<br />
			</React.Fragment>
		));

		this.setState({
			commentary: text,
		});

		this.checkWin();
	}

	checkWin = () => {
		if (this.state.userNum === 5 || this.state.compNum === 5) {
			this.commentary_array = [];
			const gameOver = this.enemy().name + ' Wins the Game!!!';
			this.commentary_array.push(gameOver);

			const winningText = this.commentary_array.map((x, i) => (
				<React.Fragment key={i}>
					{x}
					<br />
				</React.Fragment>
			));

			this.setState({
				commentary: winningText,
				disableApp: 'disabled',
				game_over: true,
			});
		}
	};

	computer_attack = () => {
		const x = computer.comp_attack();

		x.click();
	};

	handleClick(e) {
		const fire = current_player().attack(e.target.innerHTML, this.enemy());

		this.update_commentary(fire);

		setTimeout(() => {
			this.checkWin();
			if (current_player() === computer && this.state.game_over === false) {
				this.computer_attack();
			}
		}, 100);
	}

	render() {
		//using this.enemy because player turn switches instantly
		//here enemy is player that just clicked

		const hitOrMiss = e => {
			const checkSquare = this.enemy().check_wounded_ship(e.target.innerHTML);

			if (checkSquare === true) {
				e.target.className = 'hit ' + 'disabled';
			} else if (checkSquare === false) {
				e.target.className = 'miss ' + 'disabled';
			}
		};

		return (
			<Router>
				<div className={'App ' + this.state.disableApp}>
					<header className='App-header'>Battleship</header>
					<section className='scoreboard'>
						{user.name + "'s Score: " + this.state.userNum}
					</section>
					<section className='scoreboard'>
						{computer.name + "'s Score: " + this.state.compNum}
					</section>
					<section id='commentary-display'>{this.state.commentary}</section>
					<GameUI
						onClick={e => {
							this.handleClick(e);
							hitOrMiss(e);
						}}
						squaresClass={this.state.squaresClass}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
