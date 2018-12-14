import { user, computer } from '../../src/Factories/player';

describe('Board functionality', () => {
	it('players take turns attacking', () => {
		expect(user.attack(computer)).not.toEqual(user.attack(computer));
	});

	it('computer player makes random plays', () => {
		expect(computer.random_attack()).not.toEqual(computer.random_attack());
	});
});
