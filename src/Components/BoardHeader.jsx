import React, { Component } from 'react';

export default class BoardHeader extends Component {
	render() {
		return (
			<h2 className='board-header' id={this.props.playersInfo.id + '-header'}>
				{this.props.playersInfo.name}
			</h2>
		);
	}
}
