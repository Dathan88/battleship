import Shipyard from './shipyard.js';

const Gameboard = (() => {
	const ship_info = {
		aircraftCarrier: { name: 'Aircraft Carrier', length: 5 },
		battleship: { name: 'Battleship', length: 4 },
		submarine: { name: 'Submarine', length: 3 },
		cruiser: { name: 'Cruiser', length: 3 },
		destroyer: { name: 'Destroyer', length: 2 },
	};
	const fleet = [];
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
	let squares = [];
	const taken_spots = [];

	const board = (() => {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				squares.push(rows[i] + columns[j]);
			}
		}
		return squares;
	})();

	const create_ships = (() => {
		let len = Object.entries(ship_info).length;
		for (let i = 0; i < len; i++) {
			let values = Object.entries(ship_info)[i][1];
			const build = Shipyard(values.name, values.length);

			fleet.push(build);
		}
	})();

	const randomFun = x => {
		return Math.floor(Math.random() * x);
	};

	const checkPlacement = x => {
		for (let i = 0; i < fleet.length; i++) {
			for (let j = 0; j < fleet[i].coordinates.length; j++) {
				if (x === fleet[i].coordinates[j]) {
					return true;
				} else {
					return false;
				}
			}
		}
	};

	const ship_placement = (() => {
		let num = 0;
		let randomArr = [];
		for (let i = 0; i < fleet.length; i++) {
			let shipPos = (fleet[i].coordinates = []);
			let random = randomFun(10);
			randomArr.push(random);
			if (num > 0 && random === randomArr[i - 1]) {
				random = randomFun(10);
			}
			if (random < 5) {
				//rows
				random = randomFun(10);
				restartLoop2: for (let j = 0; j < fleet[i].length; j++) {
					let shipRow = rows[random];
					shipPos[j] = shipRow + columns[random + j];

					if (shipPos[j] === shipRow + 'undefined') {
						j = -1;
						random -= 1;
						continue restartLoop2;
					} else if (num > 0 && checkPlacement(shipPos[j]) === true) {
						j = -1;
						random -= 1;
						continue restartLoop2;
					}
				}
				taken_spots.push(shipPos);
			} else {
				//columns
				random = randomFun(10);
				restartLoop3: for (let k = 0; k < fleet[i].length; k++) {
					let shipColumn = [columns[random]];
					shipPos[k] = rows[random + k] + shipColumn;

					if (shipPos[k] === 'undefined' + shipColumn.toString()) {
						k = -1;
						random -= 1;
						continue restartLoop3;
					} else if (num > 0 && checkPlacement(shipPos[k]) === true) {
						k = -1;
						random -= 1;
						continue restartLoop3;
					}
				}
				taken_spots.push(shipPos);
			}
			num++;
		}
	})();

	const shots_fired = () => {
		return 'shots fired';
	};

	return { fleet, shots_fired, squares, taken_spots };
})();

export default Gameboard;

console.log(Gameboard.fleet.length, 'ln 121');
