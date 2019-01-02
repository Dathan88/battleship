import Shipyard from './shipyard.js';

const Gameboard = () => {
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
	const squares = [];
	const shotsFired = [];
	const taken_spots = [];
	const ship_info = {
		aircraftCarrier: {
			name: 'Aircraft Carrier',
			length: 5,
		},
		battleship: {
			name: 'Battleship',
			length: 4,
		},
		submarine: {
			name: 'Submarine',
			length: 3,
		},
		cruiser: { name: 'Cruiser', length: 3 },
		destroyer: { name: 'Destroyer', length: 2 },
	};
	// eslint-disable-next-line
	const _createSquares = (() => {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				squares.push(rows[i] + columns[j]);
			}
		}
		return squares;
	})();
	// eslint-disable-next-line
	const _createShips = (() => {
		let len = Object.entries(ship_info).length;
		for (let i = 0; i < len; i++) {
			let values = Object.entries(ship_info)[i][1];
			const build = Shipyard(values.name, values.length, values.coordinates);

			fleet.push(build);
		}
	})();

	const randomNum = (x = squares.length) => {
		return Math.floor(Math.random() * x);
	};

	const checkPlacement = x => {
		return taken_spots.find(el => el === x);
	};

	const ship_placement = (() => {
		for (let i = 0; i < fleet.length; i++) {
			let shipPos = (fleet[i].coordinates = []);
			let random = randomNum(10);

			if (random < 5) {
				//row placement
				random = randomNum(10);
				restartLoop2: for (let j = 0; j < fleet[i].length; j++) {
					let shipRow = rows[random];
					shipPos[j] = shipRow + columns[random + j];

					if (shipPos[j] === shipRow + 'undefined') {
						shipPos = fleet[i].coordinates = [];
						j = -1;
						random = randomNum(10);
						continue restartLoop2;
					} else if (checkPlacement(shipPos[j]) === shipPos[j]) {
						shipPos = fleet[i].coordinates = [];
						j = -1;
						random = randomNum(10);
						continue restartLoop2;
					}
				}
				shipPos.forEach(el => {
					taken_spots.push(el);
				});
			} else {
				//column placement
				random = randomNum(10);
				restartLoop3: for (let k = 0; k < fleet[i].length; k++) {
					let shipColumn = [columns[random]];
					shipPos[k] = rows[random + k] + shipColumn;

					if (shipPos[k] === 'undefined' + shipColumn.toString()) {
						shipPos = fleet[i].coordinates = [];
						k = -1;
						random = randomNum(10);
						continue restartLoop3;
					} else if (checkPlacement(shipPos[k]) === shipPos[k]) {
						shipPos = fleet[i].coordinates = [];
						k = -1;
						random = randomNum(10);
						continue restartLoop3;
					}
				}
				shipPos.forEach(el => {
					taken_spots.push(el);
				});
			}
		}
	})();

	const incoming = x => {
		shotsFired.push(x);
		for (let i = 0; i < fleet.length; i++) {
			const shipSpots = fleet[i].coordinates;
			const shipName = fleet[i].name;
			const z = shipSpots.indexOf(x);
			const damagedShip = fleet[i].hit(z);
			const sinkingShip =
				Object.entries(ship_info)[i][1].name + ' has sunk to the ocean floor';

			if (z !== -1) {
				if (damagedShip === shipName + ' has sunk to the ocean floor') {
					return sinkingShip;
				} else {
					return damagedShip;
				}
			} else if (z === -1 && i === 4) {
				miss.push(x);
				return miss;
			}
		}
	};

	const randomShots = () => {
		let x = squares[Math.floor(Math.random() * squares.length)];
		if (x === 0 || shotsFired.find(value => value === x) !== undefined) {
			x = squares[Math.floor(Math.random() * squares.length)];
		}
		// incoming(x);
		return x;
	};

	return { fleet, incoming, randomShots, squares, shotsFired };
};

export default Gameboard;
