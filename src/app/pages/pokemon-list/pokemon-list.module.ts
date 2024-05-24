import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';

import { PokemonListPage } from './pokemon-list.page';
import {OrderByPipe} from "../../pipes/order-by.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PokemonListPageRoutingModule,
        OrderByPipe
    ],
  declarations: [PokemonListPage]
})
export class PokemonListPageModule {}
