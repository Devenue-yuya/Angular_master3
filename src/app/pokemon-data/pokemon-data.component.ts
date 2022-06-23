import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Pokemon} from '../pokemon/pokemon';
import {POKEMONDATA} from '../pokemon/pokemondata';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.sass']
})
export class PokemonDataComponent implements OnInit {
  pokemonid :string;
  pokemon !:Pokemon;
  constructor(private route:ActivatedRoute, private location:Location) {
  this.pokemonid = ""; }

  ngOnInit(): void {
    this.pokemonid = this.route.snapshot.paramMap.get('id') as string;
    this.pokemon = POKEMONDATA.find(pokemon=>pokemon.id.toString()==this.pokemonid) as Pokemon
  }

  backToList(){this.location.back();
  }
 }
console.log(Pokemon)
