const Shipyard = (name, length, coordinates) => {
	let health = length;
	let ship_hull = [
		...Array(length)
			.fill(1)
			.map((_, i) => 1 + i),
	];
	//returns true if ship hull[] values are all 0 else false for hit
	const isSunk = () => {
		if (Math.max.apply(null, ship_hull) === 0) {
			return true;
		}
		return false;
	};
	//places 0 in position ship was hit; asks isSunk to check status
	const hit = x => {
		ship_hull[x] = 0;
		return isSunk();
	};
	return { name, length, coordinates, health, isSunk, hit };
};

export default Shipyard;
