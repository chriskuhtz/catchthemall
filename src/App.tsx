import { useState } from 'react';
import './App.css';
import { PokemonCard } from './interfaces/Card';

function App() {
	const [count, setCount] = useState(0);

	const y: PokemonCard = {
		id: 'x',
		name: 'pikachu',
		type: 'POKEMON',
		rank: 'BASIC',
		pokemonProperties: 'pikachudiebasicbitch',
	};

	return (
		<>
			<div>
				<p>Name: {y.name}</p>
				<p>id:{y.id}</p>
			</div>
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</button>
		</>
	);
}

export default App;
