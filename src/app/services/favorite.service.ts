import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon-models";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

    private storageKey = 'favoritePokemons';
    private favorites: Pokemon[] = [];
    private favoritesSubject = new BehaviorSubject<number>(0);

    constructor() {
        this.loadFavorites()
    }

    addFavorite(pokemon: Pokemon) {
        const favorites = this.getFavorites();
        if (!this.isFavorite(pokemon.name)) {
            favorites.push(pokemon);
            sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
            this.saveFavorites();
        }

    }

    removeFavorite(pokemonName: string) {
        let favorites = this.getFavorites();
        favorites = favorites.filter(fav => fav.name !== pokemonName);
        sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
        this.saveFavorites();
    }

    getFavorites(): Pokemon[] {
        const favorites = sessionStorage.getItem(this.storageKey);
        return favorites ? JSON.parse(favorites) : [];
    }

    isFavorite(pokemonName: string): boolean {
        const favorites = this.getFavorites();
        return favorites.some(fav => fav.name === pokemonName);
    }

    getFavoritesCount() {
        return this.favoritesSubject.asObservable();
    }

    private saveFavorites() {
        const favorites = this.getFavorites();
        sessionStorage.setItem('favorites', JSON.stringify(favorites));
        const count = favorites.length;
        console.log('Saving favorites. Count:', count);
        this.favoritesSubject.next(count);
    }

    private loadFavorites() {
        const favoritesJson = sessionStorage.getItem('favorites');
        if (favoritesJson) {
            this.favorites = JSON.parse(favoritesJson);
            const count = this.favorites.length;
            console.log('Loading favorites. Count:', count);
            this.favoritesSubject.next(count);
        }
    }


}
