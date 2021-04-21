import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import {ShareModule} from '../../share/share.module';
import {EffectsModule} from '@ngrx/effects';
import {PokemonEffect} from '../../store/effects/pokemon.effect';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([
      PokemonEffect
    ]),
    ShareModule,
  ]
})
export class PokemonModule { }
