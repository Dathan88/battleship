const Shipyard = (name, length, coordinates) => {
	let health = length;
	let ship_hull = [
		...Array(length)
			.fill(1)
			.map((_, i) => coordinates[i]),
	];

	const isSunk = () => {
		if (Math.max.apply(null, ship_hull) === 0) {
			return name + ' has sunk';
		}
		return name + ' is hit but still floating';
	};

	const hit = x => {
		ship_hull[x] = 0;
		return isSunk();
	};

	return { name, length, coordinates, health, isSunk, hit };
};

export default Shipyard;
