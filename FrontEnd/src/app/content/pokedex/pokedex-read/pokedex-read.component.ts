import { PokedexService} from './../pokedex.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokedex.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pokedex-read',
  templateUrl: './pokedex-read.component.html',
  styleUrls: ['./pokedex-read.component.scss']
})
export class PokedexReadComponent implements OnInit {

  pokemons: Pokemon[];
  displayedColumns = ['id', 'name', 'action'];

  constructor(private pokedexService: PokedexService, private dialog: MatDialog) { }

  ngOnInit() {
    this.pokedexService.read().subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(pokemons)
   })
  }

}
