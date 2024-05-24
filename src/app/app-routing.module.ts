import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {
        path: 'pokemons',
        loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
    },

    {
        path: 'pokemon-detail/:pokemon',
        loadChildren: () => import('./pages/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailPageModule)
    },

    {
        path: 'pokemons-favorites',
        loadChildren: () => import('./pages/pokemon-favorites/pokemon-favorites.module').then(m => m.PokemonFavoritesPageModule)
    },

    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full'
    },




];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
