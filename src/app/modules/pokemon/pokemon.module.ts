import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import {ShareModule} from '../../share/share.module';
import {EffectsModule} from '@ngrx/effects';
import {PokemonEffect} from '../../store/effects/pokemon.effect';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';

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
    BsDropdownModule,
    ModalModule.forRoot()
  ]
})
export class PokemonModule { }
