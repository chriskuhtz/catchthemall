import { Card } from "./Card";

export interface Player {
  cards: Card[];
  id: string;
  point: number;
  name: string;
}
