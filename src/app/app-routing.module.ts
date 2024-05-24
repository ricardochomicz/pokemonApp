import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {
        path: 'pokemons',
        loadChildren: () => import('./pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
    },

    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
  {
    path: 'pokemon-detail',
    loadChildren: () => import('./pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
  },
  {
    path: 'pokemon-detail',
    loadChildren: () => import('./page/pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
  },
  {
    path: 'pokemon-list',
    loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then( m => m.PokemonListPageModule)
  },
  {
    path: 'pokemon-detail',
    loadChildren: () => import('./pages/pokemon-detail/pokemon-detail.module').then( m => m.PokemonDetailPageModule)
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
