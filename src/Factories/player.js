import Gameboard from '../Factories/gameboard';

//track player turns ~ below Player factory
let turn = 0;
const Player = name => {
	const board = Gameboard();
	const getName = () => name;

	//recieves last hit and returns future potential hit spots
	const _attack_options = x => {
		const searching = [1, -1, 10, -10];
		const last_hit_index = board.squares.findIndex(square => square === x);
		const update_hit_index = searching.map(area => area + last_hit_index);

		const directions = update_hit_index
			.map(target => board.squares[target])
			.filter(square => square !== undefined);

		const updated_directions = directions
			.filter(miss => board.missed.includes(miss) !== true)
			.filter(hit => board.hits.includes(hit) !== true);

		return updated_directions;
	};

	// checks if random shot hits enemy ship without running function
	const check_wounded_ship = x => {
		const enemy_ships = board.shipSpots;

		return enemy_ships.includes(x);
	};

	//x = shot selected/enemy is receiving player
	//increase turn value above Player factory
	//shot return values : true = sunk+ship info, false = hit, null = missed
	const attack = (x, enemy) => {
		turn++;
		const shot = board.incoming(x, enemy);

		return shot;
	};

	let _comp_attack_type = 0;

	// controls computer attack logic before sending to attack
	const comp_attack = () => {
		const x = board.randomShots();
		const wounded_ship = check_wounded_ship(x);
		const generalArea = [].concat.apply([], board.hits.map(_attack_options));

		switch (_comp_attack_type) {
			case 0:
				if (wounded_ship === true) {
					_comp_attack_type = 1;
				}
				return document.getElementById('computer-' + x);
			case 1:
				const target = generalArea[0];
				if (generalArea.length === 0) {
					_comp_attack_type = 0;
					return document.getElementById('computer-' + x);
				}
				return document.getElementById('computer-' + target);
			default:
				console.log('default');
				break;
		}
	};

	return {
		name,
		attack,
		comp_attack,
		getName,
		board,
		check_wounded_ship,
	};
};

//keeps track of players with (turn) variable above factory
const current_player = () => {
	return turn % 2 === 0 ? user : computer;
};

const user = Player('Player 1');
const computer = Player('Sir Francis Drake');

export { current_player, user, computer };
