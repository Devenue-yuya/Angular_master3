import { Component, OnInit } from '@angular/core';
import { POKEMONDATA } from '../pokemon/pokemondata';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemondata=POKEMONDATA;

  constructor() { }

  ngOnInit(): void {
  }

}
