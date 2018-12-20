import Board from '../Factories/gameboard';

let turn = 0;
const Player = (name = 'Player 1') => {
	const board = Board();
	const shots_hit = [];
	const shots_missed = [];
	const getName = () => name;

	const attack = (x, enemy) => {
		turn++;
		const outcome = /(hit | sunk)/;
		const shot = board.incoming(x);

		if (outcome.test(shot) === true) {
			shots_hit.push(x);
			return enemy.getName() + "'s " + shot + ' and it is ' + player_turn();
		} else if (outcome.test(shot) === false) {
			shots_missed.push(x);
			return name + ' missed with ' + x + ' and it is ' + player_turn();
		}
	};

	const random_attack = enemy => {
		turn++;
		const outcome = /(hit | sunk)/;
		const x = board.randomShots();
		const shot = board.incoming(x);
		// console.log(shot, x);

		const shotCondition =
			shots_hit.indexOf(x) === -1 && shots_missed.indexOf(x) === -1;

		if (outcome.test(shot) === true && shotCondition) {
			shots_hit.push(x);
			return enemy.getName() + "'s " + shot + ' and it is ' + player_turn();
		} else if (outcome.test(shot) === false && shotCondition) {
			shots_missed.push(x);
			return name + ' missed with ' + x + ' and it is ' + player_turn();
		} else {
			turn--;
			console.log('random repeat ', x);
			return random_attack(enemy);
		}
	};

	const smart_attack = (x, enemy) => {
		turn++;
		const outcome = /(hit | sunk)/;
		const shot = board.incoming(x);
		const shotCondition =
			shots_hit.indexOf(x) === -1 && shots_missed.indexOf(x) === -1;

		if (outcome.test(shot) === true && shotCondition) {
			shots_hit.push(x);
			return enemy.getName() + "'s " + shot + ' and it is ' + player_turn();
		} else if (outcome.test(shot) === false && shotCondition) {
			shots_missed.push(x);
			return name + ' missed with ' + x + ' and it is ' + player_turn();
		} else {
			turn--;
			console.log('smart repeat ', x);
			return random_attack(enemy);
		}
	};

	return {
		name,
		shots_hit,
		shots_missed,
		attack,
		random_attack,
		smart_attack,
		getName,
		board,
	};
};

const user = Player('Player 1');
const computer = Player('Sir Francis Drake');

const player_turn = () => {
	if (turn % 2 === 0) {
		// eslint-disable-next-line
		return user.name + "'s " + 'turn';
	} else {
		// eslint-disable-next-line
		return computer.name + "'s " + 'turn';
	}
};

export { user, computer };
