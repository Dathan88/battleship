import React from 'react';
import Shipyard from '../shipyard';
const tug = Shipyard('Tugboat', 4);

test.skip('if factory returns a ship', () => {
	expect(tug).toMatchObject({
		name: expect.any(String),
		length: expect.any(Number),
	});
});

test.skip('registers hit', () => {
	expect(tug.hit(Math.floor(Math.random() * tug.length))).toContain(0);
});

test.skip('if ship can sink', () => {
	expect(tug.isSunk()).toBe('Ship still floating');
});
