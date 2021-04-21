import { Injectable } from '@angular/core';
import {BaseEffect} from './base.effect';
import {PokemonHttpService} from '../../core/https/pokemon.http.service';
import {PokemonActions} from '../actions/pokemon.action';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {PokemonModalComponent} from '../../share/components/pokemon-modal/pokemon-modal.component';
import {StoreRepository} from '../repositories/store.repository';
@Injectable()
export class PokemonEffect {
  bsModalRef: BsModalRef;
  constructor(
    private baseEffect: BaseEffect,
    private pokemonHttpService: PokemonHttpService,
    private modalService: BsModalService,
    private storeRepository: StoreRepository
  ) {}
  list$ = this.baseEffect.api$(PokemonActions.list, (param) => this.pokemonHttpService.list(param));
  detail$ = this.baseEffect.api$(PokemonActions.detail, ({id}) => this.pokemonHttpService.detail(id));
  showModalDetail$ = this.baseEffect.baseEffect$(PokemonActions.showModal, (params) => {
    this.storeRepository.dispatch(PokemonActions.detail.load({
      payload: {
        id: params.id
      }
    }));
    this.bsModalRef = this.modalService.show(PokemonModalComponent, {
      class: 'modal-lg',
      initialState: {
        id: params.id
      }
    });
  });
}
