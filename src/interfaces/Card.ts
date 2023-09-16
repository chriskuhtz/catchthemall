export type CardType = 'POKEMON' | 'ITEM';
export type Rank = 'BASIC' | 'MEDIUM' | 'POWERFUL';

interface BaseCard {
	type: CardType;
	id: string;
	name: string;
	rank: Rank;
}

export interface PokemonCard extends BaseCard {
	type: 'POKEMON';
	pokemonProperties: string;
}

export type Card = PokemonCard;
