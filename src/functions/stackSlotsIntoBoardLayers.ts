import { CardSlot } from '../interfaces/CardSlot';

export const stackSlotsIntoBoardLayers = (
	slots: CardSlot[]
): Record<number, CardSlot[]> => {
	const res: Record<number, CardSlot[]> = {};
	slots.forEach((slot) => {
		if (res[slot.boardLayer]) {
			res[slot.boardLayer].push(slot);
		} else res[slot.boardLayer] = [slot];
	});
	console.log(res);
	return res;
};
