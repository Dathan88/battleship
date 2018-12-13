import Gameboard from '../../src/Factories/gameboard.js';

describe('Board functionality', () => {
	it('should get ship objects to be placed on board', () => {
		expect(Gameboard().fleet).toHaveLength(5);
	});

	it('contains fn that decides if ship has been hit', () => {
		expect(Gameboard().incoming('A3')).toEqual(
			'Aircraft Carrier is hit but still floating'
		);
	});

	it('keeps track of missed attacks', () => {
		expect(Gameboard().incoming('H10')).toContain('H10');
	});

	it.each('reports if all ships are sunk/or not', () => {
		expect(Gameboard().incoming('J10')).toEqual(
			'Destroyer is hit but still floating'
		);
		expect(Gameboard().incoming('J9')).toEqual('Destroyer has sunk');
		expect(Gameboard().fleet).toHaveLength(4);
	});
});
