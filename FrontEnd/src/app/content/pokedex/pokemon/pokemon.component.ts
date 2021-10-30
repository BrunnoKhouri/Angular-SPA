
import { PokedexService } from './../pokedex.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokedex.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon;
  
  constructor(
    private pokemonService: PokedexService,
    private route: ActivatedRoute    
  ) { }

  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.pokemonService.readById(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

}
