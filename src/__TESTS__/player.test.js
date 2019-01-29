import { user, computer, current_player } from '../../src/Factories/player';

describe('Board functionality', () => {
	beforeEach(() => {
		user.attack('H3', computer);
	});

	it('players take turns attacking', () => {
		expect(user.name).not.toEqual(current_player().name);
	});

	it('computer player makes random plays', () => {
		expect(computer.board.randomShots()).not.toEqual(
			computer.board.randomShots()
		);
	});
});
