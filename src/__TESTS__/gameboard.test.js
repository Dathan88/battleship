import Gameboard from '../../src/Factories/gameboard.js';
import { computer, user } from '../../src/Factories/player';

describe('Board functionality', () => {
	beforeEach(() => {
		const hit = computer.board.shipSpots[2];
		computer.attack(hit, user);
		computer.attack('D8', user);
		console.log(hit);
	});

	it('should get ship objects to be placed on board', () => {
		expect(computer.board.fleet).toHaveLength(5);
	});

	it('contains fn that decides if ship has been hit', () => {
		expect(computer.board.hits.length).toBeGreaterThanOrEqual(1);
	});

	it('keeps track of missed attacks', () => {
		expect(computer.board.missed).toContain('D8');
	});
});
