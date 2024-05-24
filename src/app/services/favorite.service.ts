import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

    private favorites: string[] = [];

    constructor() { }

    addFavorite(pokemonId: number) {
        const favorites = this.getFavorites();
        if (!this.isFavorite(pokemonId)) {
            favorites.push(pokemonId);
            sessionStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    removeFavorite(pokemonId: number) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(id => id !== pokemonId);
        sessionStorage.setItem('favorites', JSON.stringify(favorites));
    }

    getFavorites(): number[] {
        const favorites = sessionStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    }

    isFavorite(pokemonId: number): boolean {
        return this.getFavorites().includes(pokemonId);
    }


}
