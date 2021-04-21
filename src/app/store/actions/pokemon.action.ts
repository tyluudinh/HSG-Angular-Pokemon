import {BaseApiAction} from './base.action';
import {createAction, props} from '@ngrx/store';
export const PokemonActions = {
  list: BaseApiAction('pokemon.list'),
  showModal: createAction(`pokemon.list search`, props<{payload: {id: number}}>()),
  detail: BaseApiAction('pokemon.detail'),
};
