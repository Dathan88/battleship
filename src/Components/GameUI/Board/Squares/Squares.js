import React, { Component } from 'react';
import Gameboard from '../../../../Factories/gameboard';

export default class Squares extends Component {
	render() {
		const boardSquares = [];
		Gameboard().squares.forEach((el, i) => {
			boardSquares.push(
				<button className='board-squares' id={el} key={i}>
					{el}
				</button>
			);
		});
		return boardSquares;
	}
}
