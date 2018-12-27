import React, { Component } from 'react';
import Squares from '../../GameUI/Board/Squares/Squares';
import { user, computer } from '../../../Factories/player';

export default class Board extends Component {
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
			<div className='boards' id={this.props.playersInfo.id + '-board'}>
				<Squares
					onClick={this.handleClick}
					playersInfo={this.props.playersInfo}
				/>
			</div>
		);
	}
}
