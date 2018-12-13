import Shipyard from './shipyard.js';

const Gameboard = (() => {
	const columns = [
		...Array(10)
			.fill(1)
			.map((_, i) => 1 + i),
	];
	const rows = [
		...Array(10)
			.fill(1)
			.map((_, i) => String.fromCharCode(97 + i).toUpperCase()),
	];
	const fleet = [];
	const miss = [];
	const shotsFired = [];
	const ship_info = {
		aircraftCarrier: {
			name: 'Aircraft Carrier',
			length: 5,
			coordinates: ['A1', 'A2', 'A3', 'A4', 'A5'],
		},
		battleship: {
			name: 'Battleship',
			length: 4,
			coordinates: ['B6', 'C6', 'D6', 'E6'],
		},
		submarine: {
			name: 'Submarine',
			length: 3,
			coordinates: ['D2', 'E2', 'F2'],
		},
		cruiser: { name: 'Cruiser', length: 3, coordinates: ['H4', 'H5', 'H6'] },
		destroyer: { name: 'Destroyer', length: 2, coordinates: ['J9', 'J10'] },
	};

	const create_ships = (() => {
		let len = Object.entries(ship_info).length;
		for (let i = 0; i < len; i++) {
			let values = Object.entries(ship_info)[i][1];
			const build = Shipyard(values.name, values.length, values.coordinates);

			fleet.push(build);
		}
	})();

	const incoming = x => {
		shotsFired.push(x);
		for (let i = 0; i < fleet.length; i++) {
			const shipSpots = fleet[i].coordinates;
			let z = shipSpots.indexOf(x);

			if (z !== -1) {
				if (fleet[i].hit(z) === fleet[i].name + ' has sunk') {
					fleet.splice(i, 1);
					return Object.entries(ship_info)[i][1].name + ' has sunk';
				} else {
					return fleet[i].hit(z);
				}
			} else if (z === -1 && i === 4) {
				miss.push(x);
			}
		}
		return miss;
	};

	return { fleet, incoming };
})();

export default Gameboard;
