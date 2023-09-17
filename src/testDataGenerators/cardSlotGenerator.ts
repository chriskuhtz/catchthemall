import { v4 } from 'uuid';
import { CardSlot } from '../interfaces/CardSlot';
import { cardGenerator } from './cardGenerator';

export const cardSlotGenerator = (data?: Partial<CardSlot>): CardSlot => {
	return {
		id: v4(),
		state: 'available',
		card: cardGenerator(),
		boardLayer: 1,
		lockedBy: [],
		...data,
	};
};
