import React, { Component } from 'react';
import Gameboard from '../Factories/gameboard';

export default class Squares extends Component {
	render() {
		const BoardSquares = [];
		Gameboard().squares.forEach((el, i) => {
			BoardSquares.push(
				<div
					className={this.props.squaresClass}
					id={this.props.playersInfo.id + '-' + el}
					key={i}
					onClick={this.props.onClick}
				>
					{el}
				</div>
			);
		});

		return BoardSquares;
	}
}
