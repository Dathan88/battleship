import gameboard from '../gameboard.sandbox';
import Shipyard from '../shipyard';

test.only('get ship objects to be placed on board', () => {
	const testBoard = gameboard();
	expect(testBoard.fleet).toHaveLength(5);
});

test('fn that decides if ship has been hit', () => {
	expect();
});

test('keep track of missed attacks', () => {
	expect();
});

test('reports if all ships are sunk/or not', () => {
	expect();
});
