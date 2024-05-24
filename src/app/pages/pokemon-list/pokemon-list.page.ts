import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonApiResponse, PokemonApiResult} from "../../models/pokemon-models";
import {PokemonService} from "../../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

    pokemons: Pokemon[] = [];

    constructor(private pokemonService: PokemonService, private router: Router) {}

    ngOnInit() {
        this.loadPokemons();
    }


    loadPokemons() {
        this.pokemonService.getPokemonList(0, 20).subscribe((response: PokemonApiResponse) => {
            console.log(response)
            this.pokemons = response.results.map((pokemon: PokemonApiResult) => {
                const id = this.extractPokemonId(pokemon.url);
                return {
                    id: id,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
                };
            });
        });
    }

    private extractPokemonId(url: string): number {
        const parts = url.split('/');
        return +parts[parts.length - 2];
    }

}
