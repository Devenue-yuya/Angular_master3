import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon/pokemon';
import {POKEMONDATA} from './pokemon/pokemondata';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemondata:Pokemon[]=POKEMONDATA;

  currentValue:string ='';

  constructor() { }

  getPokemondata():Pokemon[]{
    return this.pokemondata;
  }

  getPokemon(id:string):Pokemon{
    return this.pokemondata.find(pokemon=>pokemon.id.toString()==id)as Pokemon;
  }
searchPokemon(keyword: string): Pokemon []{
  let resultArr: Pokemon[] =[];

    for (let pokemon of this.pokemondata) {
      let dataStr = JSON.stringify(pokemon);
      if (dataStr.search(keyword) >=0) {
        resultArr.push(pokemon);
      }
    }

    return resultArr;
}
}
