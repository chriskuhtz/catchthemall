import { Card } from "../../interfaces/Card";

export function CardDisplay({ card }: { card: Card }) {
  return (
    <>
      <div className="cardDisplay">
        <p>Name: {card.name}</p>
        <p>id: {card.id}</p>
      </div>
    </>
  );
}
