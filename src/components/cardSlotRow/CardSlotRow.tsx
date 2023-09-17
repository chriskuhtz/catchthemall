import { CardSlot } from '../../interfaces/CardSlot';
import { CardDisplay } from '../card/CardDisplay';

export const CardSlotRow = ({ slots }: { slots: CardSlot[] }) => {
	return (
		<div className="cardRow">
			{slots.map((s) => (
				<CardDisplay card={s.card} />
			))}
		</div>
	);
};
