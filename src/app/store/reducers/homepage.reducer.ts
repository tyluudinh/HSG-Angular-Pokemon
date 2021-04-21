import {
  HomePageActions,
} from '../actions/homepage.action';
import {createReducer, Action} from '@ngrx/store';
import {BaseApiReducer} from './api-base.reducer';
import {ApiResultStateModel, initApiResultState} from '../../share/models/api-result.model';
import {IItem} from '../../share/models/item.model';
import {IPokemon} from '../../share/models/pokemon.model';
import {IGeneration} from '../../share/models/generation.model';
import {IGame} from '../../share/models/game.model';

export interface HomePageState {
  top10Pokemon: ApiResultStateModel<Array<IPokemon>>;
  top10Items: ApiResultStateModel<Array<IItem>>;
  allGameVersions: ApiResultStateModel<Array<IGame>>;
  allGeneration: ApiResultStateModel<Array<IGeneration>>;
}
export const initialState: HomePageState = {
  top10Pokemon: initApiResultState([]),
  top10Items: initApiResultState([]),
  allGameVersions: initApiResultState([]),
  allGeneration: initApiResultState([]),
};
const pokemonReducer = createReducer(
  initialState,
  ...BaseApiReducer('top10Pokemon', HomePageActions.top10Pokemon),
  ...BaseApiReducer('top10Items', HomePageActions.top10Items),
  ...BaseApiReducer('allGameVersions', HomePageActions.allGameVersions),
  ...BaseApiReducer('allGeneration', HomePageActions.allGeneration),
  )
;
export function reducer(state: HomePageState | undefined, action: Action): any {
  return pokemonReducer(state, action);
}
