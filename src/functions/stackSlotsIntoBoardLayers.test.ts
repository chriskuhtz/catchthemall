import { CardSlot } from '../interfaces/CardSlot';
import { cardSlotGenerator } from '../testDataGenerators/cardSlotGenerator';
import { stackSlotsIntoBoardLayers } from './stackSlotsIntoBoardLayers';

describe('stackSlotsIntoBoardLayers', () => {
	it('returns empty Record for empty slots array', () => {
		const slots: CardSlot[] = [];

		const res = stackSlotsIntoBoardLayers(slots);
		expect(Object.keys(res).length).toBe(0);
	});

	it('stacks one slot correctly', () => {
		const boardLayer = 1;
		const slot = cardSlotGenerator({ boardLayer });
		const slots: CardSlot[] = [slot];

		const res = stackSlotsIntoBoardLayers(slots);
		expect(Object.keys(res).length).toBe(1);
		expect(res[boardLayer].length).toBe(1);
	});

	it('stacks multiple slots correctly', () => {
		const slots: CardSlot[] = [
			cardSlotGenerator({ boardLayer: 1 }),
			cardSlotGenerator({ boardLayer: 1 }),
			cardSlotGenerator({ boardLayer: 2 }),
			cardSlotGenerator({ boardLayer: 3 }),
		];

		const res = stackSlotsIntoBoardLayers(slots);
		expect(Object.keys(res).length).toBe(3);
		expect(res[1].length).toBe(2);
		expect(res[2].length).toBe(1);
		expect(res[3].length).toBe(1);
	});
});
