import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemondata!:Pokemon[];

  constructor(private psv: PokemonService) { }

  ngOnInit(): void {
    this.pokemondata = this.psv.getPokemondata();
  }
   searchPokemon(keyword:string){
     this.pokemondata = this.psv.searchPokemon(keyword);
     this.psv.currentValue = keyword;
  }

  getCurrentValue(){
    return this.psv.currentValue;
  }

}
