import React, { Component } from 'react';
import Squares from './Squares';

export default class Board extends Component {
	render() {
		return (
			<div className='boards' id={this.props.playersInfo.id + '-board'}>
				<Squares
					onClick={this.props.onClick}
					playersInfo={this.props.playersInfo}
					squaresClass={this.props.squaresClass}
				/>
			</div>
		);
	}
}
