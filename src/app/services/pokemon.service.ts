import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonApiResponse} from "../models/pokemon-models";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

    private apiUrl = 'https://pokeapi.co/api/v2/';

    constructor(private httpClient: HttpClient) {
    }

    getPokemonList(offset: number, limit: number): Observable<PokemonApiResponse> {
        return this.httpClient.get<PokemonApiResponse>(`${this.apiUrl}pokemon?offset=${offset}&limit=${limit}`);
    }
}
