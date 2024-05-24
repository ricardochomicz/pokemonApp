export interface Pokemon {
    id: number;
    name: string;
    image: string;
    base_experience: string;
    weight: string;
    height: string;
    abilities:{ ability: string, name: string }[];
    types:{ type: string, name: string }[];
    moves:{ move:string, name: string }[];
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

