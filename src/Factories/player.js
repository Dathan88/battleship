import Gameboard from '../Factories/gameboard';

let turn = 0;
const Player = (name = 'Player 1') => {
	const shots_hit = [];
	const shots_missed = [];
	const getName = () => name;
	const attack = enemy => {
		turn++;
		console.log(name + ' has hit ' + enemy.getName());
		return player_turn();
	};
	const random_attack = () => {
		turn++;
		Gameboard.randomShots();
		return Gameboard.randomShots();
	};
	const smart_attack = () => turn++;
	const info = () => {
		return (
			name +
			' has hit at - ' +
			shots_hit +
			' - And missed at - ' +
			shots_missed +
			' -'
		);
	};

	return {
		name,
		shots_hit,
		shots_missed,
		attack,
		random_attack,
		smart_attack,
		info,
		getName,
	};
};

const user = Player('Player 1');
const computer = Player('Sir Francis Drake');

const player_turn = () => {
	if (turn % 2 === 0) {
		return user.name + "'s " + 'turn';
	} else {
		return computer.name + "'s " + 'turn';
	}
};

export { user, computer };
