import $ from 'jquery';

const Shipyard = (name, length) => {
	let health = length;
	let ship_hull = [
		...Array(length)
			.fill(1)
			.map((_, i) => 1 + i),
	];
	// console.log(ship_hull);
	const isSunk = x => {
		if (Math.max.apply(null, ship_hull) === 0) {
			console.log('Ship has sunk');
			return 'Ship has sunk';
		}
		// console.log('Ship still floating');
		return 'Ship still floating';
	};

	const hit = x => {
		let hitPlace = (ship_hull[x] = 0);

		isSunk();
		return ship_hull;
	};

	return { name, health, length, isSunk, hit };
};

export default Shipyard;

const tug = Shipyard('Tugboat', 5);
// console.log(tug.isSunk());
// tug.hit(1);
// tug.hit(2);
// tug.hit(0);
// tug.hit(4);
// tug.hit(3);
// console.log(tug.hit(Math.floor(Math.random() * tug.length)));
