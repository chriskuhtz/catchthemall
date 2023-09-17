import { Card } from "../../interfaces/Card";

export function CardDisplay({ card }: { card: Card }) {
  return (
    <>
      <div className="cardDisplay">
        <p>Name: {card.name}</p>
        <p>ID: {card.id}</p>
        <p>Rank: {card.rank}</p>
      </div>
    </>
  );
}
