import { CardSlot } from '../interfaces/CardSlot';
import { stackSlotsIntoBoardLayers } from './stackSlotsIntoBoardLayers';

describe('stackSlotsIntoBoardLayers', () => {
	it('returns empty Record for empty slots array', () => {
		const slots: CardSlot[] = [];

		const res = stackSlotsIntoBoardLayers(slots);
		expect(Object.keys(res).length).toBe(0);
	});
});
