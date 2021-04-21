import {
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPokemon from './pokemon.reducer';
import * as fromHomePage from './homepage.reducer';


export interface State {
  pokemon: fromPokemon.PokemonState;
  homepage: fromHomePage.HomePageState;
}

export const reducers = {
  pokemon: fromPokemon.reducer,
  homepage: fromHomePage.reducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
