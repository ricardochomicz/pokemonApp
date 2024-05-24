import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokémons', url: '/pokemons', icon: 'archive' },
    { title: 'Favoritos', url: '/pokemons-favorites', icon: 'heart' },
    // { title: 'Sobre', url: '/', icon: 'information' },

  ];
  constructor() {}
}
