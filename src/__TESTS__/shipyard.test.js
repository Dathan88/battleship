import React from 'react';
import Shipyard from '../../src/Factories/shipyard.js';
const tug = Shipyard('Tugboat', 4);

test('if factory returns a ship', () => {
	expect(tug).toMatchObject({
		name: expect.any(String),
		length: expect.any(Number),
	});
});

test('registers hit', () => {
	expect(tug.hit(Math.floor(Math.random() * tug.length))).toContain(0);
});

test('if ship can sink', () => {
	expect(tug.isSunk()).toBe('Ship still floating');
});
