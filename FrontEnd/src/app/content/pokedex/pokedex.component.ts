import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headeData = {
      title: 'Pokedex',
      icon: 'catching_pokemon',
      routeUrl: 'pokedex'
    }
  }
  ngOnInit() {
  }

}
