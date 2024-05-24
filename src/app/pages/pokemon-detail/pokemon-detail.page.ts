import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon-models";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {ToggleFavoriteService} from "../../services/toggle-favorite.service";

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.page.html',
    styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

    pokemon: Pokemon | undefined;

    constructor(private route: ActivatedRoute,
                private pokemonService: PokemonService,
                private toggleFavoriteService: ToggleFavoriteService) {
    }

    ngOnInit() {

        const pokemonId = this.route.snapshot.paramMap.get('pokemon');
        if (pokemonId) {
            this.pokemonService.getPokemonByName(pokemonId).subscribe((pokemon: Pokemon) => {
                this.pokemon = pokemon;
                // @ts-ignore
                this.pokemon.height = (this.pokemon.height / 10).toFixed(1);
                // @ts-ignore
                this.pokemon.weight = (this.pokemon.weight / 10).toFixed(2);
                // @ts-ignore
                this.pokemon.abilities = this.pokemon.abilities[0].ability.name
                // @ts-ignore
                this.pokemon.types = this.pokemon.types[0].type.name
                // @ts-ignore
                this.pokemon.moves = this.pokemon.moves[0].move.name
            });
        }
    }

    toggleFavorite(pokemon: Pokemon) {
        this.toggleFavoriteService.toggleFavorite(pokemon);
    }

    isFavorite(pokemonName: string): boolean {
        return this.toggleFavoriteService.isFavorite(pokemonName);
    }



}
