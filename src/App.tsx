import { useState } from "react";
import { CardDisplay } from "./components/card/Card";
import { PokemonCard } from "./interfaces/Card";

function App() {
  const [count, setCount] = useState(0);

  const y: PokemonCard = {
    id: "x",
    name: "pikachu",
    type: "POKEMON",
    rank: "BASIC",
    pokemonProperties: "pikachudiebasicbitch",
  };

  return (
    <div className="cardRow">
      <CardDisplay card={y} />
      <CardDisplay card={y} />
    </div>
  );
}

export default App;
