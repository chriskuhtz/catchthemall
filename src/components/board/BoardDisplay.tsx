import { Board } from "../../interfaces/Board";
import { CardSlot } from "../../interfaces/CardSlot";
import { CardDisplay } from "../card/CardDisplay";

export function BoardDisplay({ board }: { board: Board }) {
  const sortedSlots = (slots: CardSlot[]): Record<number, CardSlot[]> => {
    const res = {};
    slots.forEach((slot) => {
      Object.keys(res).find((key) => key === slot.boardLayer);
    });
    return res;
  };

  return (
    <>
      {board.cardSlots.map((c) => (
        <CardDisplay card={c.card} />
      ))}
      <div className="cardRow"></div>
    </>
  );
}
