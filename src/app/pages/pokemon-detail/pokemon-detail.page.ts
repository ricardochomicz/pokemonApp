import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon-models";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {FavoriteService} from "../../services/favorite.service";

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.page.html',
    styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {

    pokemon!: Pokemon;

    constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private favoriteService: FavoriteService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params && params['pokemon']) {
                const pokemonName = params['pokemon'];
                // Buscando os detalhes completos do Pokémon pelo ID
                this.pokemonService.getPokemonByName(pokemonName).subscribe((pokemon) => {
                    console.log(pokemon)
                    this.pokemon = pokemon;
                    // @ts-ignore
                    this.pokemon.height = (this.pokemon.height / 10).toFixed(1);
                    // @ts-ignore
                    this.pokemon.weight = (this.pokemon.weight / 10).toFixed(2);
                    // @ts-ignore
                    this.pokemon.abilities = this.pokemon.abilities[0].ability.name
                    // @ts-ignore
                    this.pokemon.types = this.pokemon.types[0].type.name
                }, error => {
                    console.error('Erro ao carregar detalhes do Pokémon...', error);
                });
            }
        });
    }

    toggleFavorite(pokemonId: number) {
        if (this.isFavorite(pokemonId)) {
            this.favoriteService.removeFavorite(pokemonId);
        } else {
            this.favoriteService.addFavorite(pokemonId);
        }
    }

    isFavorite(pokemonId: number): boolean {
        return this.favoriteService.isFavorite(pokemonId);
    }

}
