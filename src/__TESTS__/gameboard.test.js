import Gameboard from '../../src/Factories/gameboard.js';

describe('Board functionality', () => {
	console.log(Gameboard.gameboard);
	it('should get ship objects to be placed on board', () => {
		expect(Gameboard.fleet).toHaveLength(5);
	});

	it('contains fn that decides if ship has been hit', () => {
		expect(Gameboard.shots_fired()).toBe('shots fired');
	});

	it.skip('that keeps track of missed attacks', () => {
		expect();
	});

	it.skip('that reports if all ships are sunk/or not', () => {
		expect();
	});
});
