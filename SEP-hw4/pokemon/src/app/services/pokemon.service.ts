import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import { PaginationList, PokemonResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly api_url: string = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private readonly http: HttpClient) { }

  getPokemon(pokemonName: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(this.api_url + pokemonName)
  }

  getAllPokemons(): Observable<string[]> {
    return this.http.get<PaginationList>(this.api_url).pipe(
      map(({ results }: PaginationList) => {
        return results.map((data: any) => data.name)
      }),
    )
  }
}
