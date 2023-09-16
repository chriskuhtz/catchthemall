import { Card } from "./Card";

export type CardSlotState = "available" | "unavailable" | "done";

export interface CardSlot {
  id: string;
  state: CardSlotState;
  card: Card;
  boardLayer: number;
  lockedBy: CardSlot["id"][];
}
