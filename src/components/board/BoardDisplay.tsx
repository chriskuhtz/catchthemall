import { useMemo } from 'react';
import { stackSlotsIntoBoardLayers } from '../../functions/stackSlotsIntoBoardLayers';
import { Board } from '../../interfaces/Board';
import { CardSlotRow } from '../cardSlotRow/CardSlotRow';

export function BoardDisplay({ board }: { board: Board }) {
	const boardLayers = useMemo(() => {
		return stackSlotsIntoBoardLayers(board.cardSlots);
	}, [board]);
	return (
		<>
			{Object.values(boardLayers).map((layer) => (
				<CardSlotRow slots={layer} />
			))}
		</>
	);
}
