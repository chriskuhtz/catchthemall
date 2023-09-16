import { v4 } from "uuid";
import { BoardDisplay } from "./components/board/BoardDisplay";
import { Board } from "./interfaces/Board";
import { PokemonCard } from "./interfaces/Card";
import { CardSlot } from "./interfaces/CardSlot";

const mockCard: PokemonCard = {
  id: "x",
  name: "pikachu",
  type: "POKEMON",
  rank: "BASIC",
  pokemonProperties: "pikachudiebasicbitch",
};
const mockCardSlots: CardSlot[] = Array.from({ length: 20 }).map((x, i) => {
  return {
    id: v4(),
    state: "available",
    card: mockCard,
    boardLayer: i % 4,
    lockedBy: [],
  };
});
const mockBoard: Board = { cardSlots: mockCardSlots };

function App() {
  return <BoardDisplay board={mockBoard} />;
}

export default App;
