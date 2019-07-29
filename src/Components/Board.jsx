import React, { Component } from 'react';
import Squares from './Squares';
import classNames from 'classnames';

export default class Board extends Component {
	render() {
		const sqClass = sq => {
			const board = this.props.playersInfo.board;
			const hitClass = board.hits.includes(sq);
			const missClass = board.missed.includes(sq);
			const plyrShipClass =
				this.props.playersInfo.id === 'computer' &&
				board.shipSpots.includes(sq);
			const neutral =
				hitClass === false && missClass === false && plyrShipClass === false;

			return classNames({
				'board-squares btn': neutral,
				'hit btn': hitClass,
				'miss btn': missClass,
				'playerShips btn': plyrShipClass,
				'disabled btn': hitClass || missClass,
			});
		};
		return (
			<div className='boards' id={this.props.playersInfo.id + '-board'}>
				{this.props.playersInfo.squares.map((sq, i) => {
					return (
						<Squares
							onClick={this.props.onClick}
							onMouseDown={this.handleMouseDown}
							value={sq}
							position={i + 1}
							id={this.props.playersInfo.id + '-' + sq}
							key={i + 1}
							squaresClass={sqClass(sq)}
						/>
					);
				})}
			</div>
		);
	}
}
