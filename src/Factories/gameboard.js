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
	const missed = [];
	const hits = [];
	const shotsFired = [];
	const squares = [];
	const shipSpots = [];
	const kills = [];
	const ship_info = {
		1: {
			name: 'Aircraft Carrier',
			length: 5,
		},
		2: {
			name: 'Battleship',
			length: 4,
		},
		3: {
			name: 'Submarine',
			length: 3,
		},
		4: { name: 'Cruiser', length: 3 },
		5: { name: 'Destroyer', length: 2 },
	};

	//digital version of board placed into squares array
	const _createSquares = (() => {
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				squares.push(rows[i] + columns[j]);
			}
		}
		return squares;
	})();

	//send ship_info to shipyard and place into fleet
	const _createShips = (() => {
		let len = Object.entries(ship_info).length;
		for (let i = 0; i < len; i++) {
			let values = Object.entries(ship_info)[i][1];
			const build = Shipyard(values.name, values.length, values.coordinates);

			fleet.push(build);
		}
	})();

	//called from ship_placement
	const randomNum = (x = squares.length) => {
		return Math.floor(Math.random() * x);
	};

	//called from ship_placement
	const checkPlacement = x => {
		return shipSpots.find(el => el === x);
	};

	const ship_placement = (() => {
		for (let i = 0; i < fleet.length; i++) {
			let shipPos = (fleet[i].coordinates = []);
			let random = randomNum(10);

			//row placement & column placement in relation to random number
			//random < 5 = rows & random > 5 = columns
			if (random < 5) {
				random = randomNum(10);
				restartLoop2: for (let j = 0; j < fleet[i].length; j++) {
					let shipRow = rows[random];
					shipPos[j] = shipRow + columns[random + j];

					//check that ships don't place on same squares
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
				//track ship placement to prevent ships sharing squares
				shipPos.forEach(el => {
					shipSpots.push(el);
				});
			} else {
				random = randomNum(10);
				restartLoop3: for (let k = 0; k < fleet[i].length; k++) {
					let shipColumn = [columns[random]];
					shipPos[k] = rows[random + k] + shipColumn;

					//check that ships don't place on same squares
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
				//track ship placement to prevent ships sharing squares
				shipPos.forEach(el => {
					shipSpots.push(el);
				});
			}
		}
	})();

	//shots fired stored in kills/hits/missed and return true/false/null
	const incoming = (x, enemy) => {
		//stores all shots regardless of outcome
		shotsFired.push(x);
		const updateBoard = squares.findIndex(sq => sq === x);

		for (let i = 0; i < fleet.length; i++) {
			//if x value in ship coordinates return index/-1 if not
			const each_ship_spots = fleet[i].coordinates;
			const shipName = fleet[i].name;
			const checkIncoming = each_ship_spots.findIndex(spot => spot === x);

			//checkIncoming for sunk/hit/miss
			//sunk = true&pushes ship to kills/hit = false/miss = null
			if (checkIncoming !== -1) {
				const shipHit = fleet[i].hit(checkIncoming, enemy);
				hits.push(x);
				each_ship_spots[checkIncoming] = 0;
				return shipHit ? (kills.push(shipName), shipHit) : shipHit;
			} else if (checkIncoming === -1 && i === 4) {
				missed.push(x);
				return null;
			}
		}
	};

	//assist with computer shots before being sent to incoming
	const randomShots = () => {
		let x = squares[Math.floor(Math.random() * squares.length)];
		//if x has been shot before, roll again
		if (x === 0 || shotsFired.find(value => value === x) !== undefined) {
			return randomShots();
		}
		return x;
	};

	return {
		fleet,
		incoming,
		randomShots,
		squares,
		shotsFired,
		kills,
		hits,
		missed,
		shipSpots,
		randomNum,
	};
};

export default Gameboard;
