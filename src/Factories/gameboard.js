import Shipyard from './shipyard';

const gameboard = () => {
	const fleet = [];
	const ship_info = {
		aircraftCarrier: { name: 'Aircraft Carrier', length: 5 },
		battleship: { name: 'Battleship', length: 4 },
		submarine: { name: 'Submarine', length: 3 },
		cruiser: { name: 'Cruiser', length: 3 },
		destroyer: { name: 'Destroyer', length: 2 },
	};

	const createShips = () => {
		let len = Object.entries(ship_info).length;
		for (let i = 0; i < len; i++) {
			let name = Object.entries(ship_info)[i][0];
			let values = Object.entries(ship_info)[i][1];
			// console.log(name, values);
			fleet.push(Shipyard(values.name, values.length));
		}
		return { fleet };
	};

	createShips();
	return { fleet };
};

export default gameboard;
console.log(gameboard());
// console.log(gameboard().fleet);
