import React, { Component } from 'react';
import Squares from '../../GameUI/Board/Squares/Squares';

export default class Board extends Component {
	render() {
		return (
			<div className='boards' id={this.props.playersInfo.id + '-board'}>
				<Squares />
			</div>
		);
	}
}
