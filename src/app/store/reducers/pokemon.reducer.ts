import {
  PokemonActions,
} from '../actions/pokemon.action';
import {createReducer, Action} from '@ngrx/store';
import {BaseApiReducer} from './api-base.reducer';
import {ApiResultStateModel, initApiResultState} from '../../share/models/api-result.model';
import {IPokemon} from '../../share/models/pokemon.model';
import {IPokemonDetail} from '../../share/models/pokemon-detail.model';

export interface PokemonState {
  list: ApiResultStateModel<Array<IPokemon>>;
  detail: ApiResultStateModel<IPokemonDetail>;
}
export const initialState: PokemonState = {
  list: initApiResultState([]),
  detail: initApiResultState(null),
};
const pokemonReducer = createReducer(
  initialState,
  ...BaseApiReducer('list', PokemonActions.list),
  ...BaseApiReducer('detail', PokemonActions.detail),
  )
;
export function reducer(state: PokemonState | undefined, action: Action): any {
  return pokemonReducer(state, action);
}
