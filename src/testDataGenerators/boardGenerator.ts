import { Board } from '../interfaces/Board';
import { CardSlot } from '../interfaces/CardSlot';
import { cardSlotGenerator } from './cardSlotGenerator';

export const boardGenerator = (data?: Partial<Board>): Board => {
	const mockCardSlots: CardSlot[] = Array.from({ length: 20 }).map((x, i) =>
		cardSlotGenerator({ boardLayer: i % 4 })
	);

	return { cardSlots: mockCardSlots, ...data };
};
