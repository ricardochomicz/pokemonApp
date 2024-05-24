import {Component, OnInit} from '@angular/core';
import {FavoriteService} from "../../services/favorite.service";
import {Pokemon} from "../../models/pokemon-models";
import {ToggleFavoriteService} from "../../services/toggle-favorite.service";

@Component({
    selector: 'app-pokemon-favorites',
    templateUrl: './pokemon-favorites.page.html',
    styleUrls: ['./pokemon-favorites.page.scss'],
})
export class PokemonFavoritesPage implements OnInit {

    pokemons: Pokemon[] = [];
    pokemon: Pokemon | undefined;

    constructor(private favoriteService: FavoriteService, private toggleFavoriteService: ToggleFavoriteService) {
    }

    ngOnInit() {
        this.getFavorites()
    }

    getFavorites() {
        this.pokemons = this.favoriteService.getFavorites();
    }

    toggleFavorite(pokemon: Pokemon) {
        this.toggleFavoriteService.toggleFavorite(pokemon)
    }

    isFavorite(pokemonName: string): boolean {
        return this.toggleFavoriteService.isFavorite(pokemonName)    }

}
