import { PokemonCard } from '../interfaces/Card';

export const cardGenerator = (data?: Partial<PokemonCard>): PokemonCard => {
	return {
		id: 'x',
		name: 'pikachu',
		type: 'POKEMON',
		rank: 'BASIC',
		pokemonProperties: 'pikachudiebasicbitch',
		...data,
	};
};
