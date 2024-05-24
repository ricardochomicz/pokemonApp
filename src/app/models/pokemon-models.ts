export interface Pokemon {
    id: number;
    name: string;
    image: string;
}

export interface PokemonApiResponse {
    count: number;
    next: string;
    previous: string;
    results: { name: string, url: string }[];
}

export interface PokemonApiResult {
    name: string;
    url: string;
}

