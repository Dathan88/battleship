import React from 'react';

const Squares = props => {
	return (
		<div
			className={props.squaresClass}
			id={props.id}
			onClick={props.onClick}
			onMouseDown={props.onMouseDown}
			value={props.value}
			key={props.position}
		>
			{props.value}
		</div>
	);
};

export default Squares;
