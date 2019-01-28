import React, { Component } from 'react';
import BoardHeader from './BoardHeader';
import Board from './Board';
import { user, computer } from '../Factories/player';

export default class GameUI extends Component {
	render() {
		const playersInfo = {
			human: {
				name: user.name,
				id: 'human',
				board: user.board,
				squares: user.board.squares,
			},
			computer: {
				name: computer.name,
				id: 'computer',
				board: computer.board,
				squares: computer.board.squares,
			},
		};
		return (
			<div className='play-area'>
				<div
					className='board-wrappers'
					id={playersInfo.human.id + '-board-wrapper'}
				>
					<BoardHeader playersInfo={playersInfo.human} />
					<Board playersInfo={playersInfo.human} onClick={this.props.onClick} />
				</div>

				<div
					className='board-wrappers'
					id={playersInfo.computer.id + '-board-wrapper'}
				>
					<BoardHeader playersInfo={playersInfo.computer} />
					<Board
						playersInfo={playersInfo.computer}
						onClick={this.props.onClick}
					/>
				</div>
			</div>
		);
	}
}
