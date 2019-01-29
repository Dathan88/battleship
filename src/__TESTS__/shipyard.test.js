import Shipyard from '../../src/Factories/shipyard.js';

describe('Ship functionality', () => {
	const tug = Shipyard('Tugboat', 4, ['D2', 'E2', 'F2', 'G2']);

	test('if factory returns a ship', () => {
		expect(tug).toMatchObject({
			name: expect.any(String),
			length: expect.any(Number),
			coordinates: expect.any(Array),
		});
	});

	test('registers hit', () => {
		expect(tug.hit(Math.floor(Math.random() * tug.length))).toBe(false);
	});

	test.each('if ship can sink', () => {
		expect(raft.hit(0)).toBe('Tugboat is hit but still floating');
		expect(raft.hit(1)).toBe('Tugboat is hit but still floating');
		expect(raft.hit(2)).toBe('Tugboat is hit but still floating');
		expect(raft.hit(3)).toBe('Tugboat has sunk');
	});
});
