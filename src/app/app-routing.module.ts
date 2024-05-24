import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

const routes: Routes = [
    {
        path: 'pokemons', component: PokemonListComponent
    },

    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
