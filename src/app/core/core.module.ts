import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseHttpService} from './https/base.http.service';
import {HomepageHttpService} from './https/homepage.http.service';
import {HttpClientModule} from '@angular/common/http';
import {PokemonHttpService} from './https/pokemon.http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BaseHttpService,
    HomepageHttpService,
    PokemonHttpService,
  ]
})
export class CoreModule { }
