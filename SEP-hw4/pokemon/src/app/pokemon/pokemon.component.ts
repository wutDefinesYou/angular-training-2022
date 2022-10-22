import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokemonResponse } from '../interfaces/pokemon';
import { PokemonDialogComponent } from '../pokemon-dialog/pokemon-dialog.component';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons: PokemonResponse[] = []
  anyPokemonChose: boolean = false
  pokemonChosen!: PokemonResponse

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getAllPokemons()
  }

  getAllPokemons(): void {
    this.pokemonService.getAllPokemons().subscribe(names => {
      names.forEach(name => {
        this.pokemonService.getPokemon(name).subscribe(pokemon => {
          this.pokemons.push(pokemon)
        })
      })
    })
  }

  openDialog(pokemon: PokemonResponse): void {
    const dialogRef = this.dialog.open(PokemonDialogComponent, {
      width: '220px',
      height: '250px',
      data: pokemon
    })
    dialogRef.afterClosed().subscribe(res => {
      if (res)
        this.pokemonChose(pokemon)
    })
  }

  pokemonChose(pokemon: PokemonResponse): void {
    this.pokemons = []
    this.anyPokemonChose = true
    this.pokemonChosen = pokemon
  }
}
