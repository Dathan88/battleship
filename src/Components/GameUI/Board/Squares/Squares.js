import React, { Component } from 'react';
import Gameboard from '../../../../Factories/gameboard';

export default class Squares extends Component {
	render() {
		const boardSquares = [];
		Gameboard().squares.forEach((el, i) => {
			boardSquares.push(
				<button
					className={'board-squares'}
					id={this.props.playersInfo.id + '-' + el}
					key={i}
					disabled={this.props.playersInfo.disabled}
					onClick={this.props.onClick}
				>
					{el}
				</button>
			);
		});
		return boardSquares;
	}
}
