import {Component, OnInit} from '@angular/core';
import {FavoriteService} from "./services/favorite.service";
import {Pokemon} from "./models/pokemon-models";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Pokémons', url: '/pokemons', icon: 'archive' },
    { title: 'Meus Favoritos', url: '/pokemons-favorites', icon: 'heart' },
    // { title: 'Sobre', url: '/', icon: 'information' },

  ];

    favoritesCount: number = 0;
    constructor(private favoriteService: FavoriteService) {

    }

    ngOnInit(){
        this.favoriteService.getFavoritesCount().subscribe(count => {
            this.favoritesCount = count;
        });
    }
}
