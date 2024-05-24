import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {
        path: 'pokemons',
        loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListPageModule)
    },

    {
        path: 'pokemon/:name',
        loadChildren: () => import('./pages/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailPageModule)
    },

    {
        path: '',
        redirectTo: 'pokemons',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
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
