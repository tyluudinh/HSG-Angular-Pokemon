import { Component, OnInit } from '@angular/core';
import {StoreRepository} from '../../../../store/repositories/store.repository';
import {ApiResultStateModel, IApiResult} from '../../../../share/models/api-result.model';
import {IPokemon} from '../../../../share/models/pokemon.model';
import {Observable} from 'rxjs';
import {PokemonActions} from '../../../../store/actions/pokemon.action';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  itemsPerPage = 20;
  itemsPerPageList = [10, 20, 50, 100];
  itemsPerRow = 5;
  pokemonList$: Observable<ApiResultStateModel<IApiResult<Array<IPokemon>>>>;
  constructor(
    private storeRepository: StoreRepository
  ) {
    this.pokemonList$ = this.storeRepository.getStateByProp('pokemon', 'list');
  }

  ngOnInit(): void {
    this.storeRepository.dispatch(PokemonActions.list.load({
      offset: 0,
      limit: this.itemsPerPage
    }));
  }
  get rowsPerPage(): Array<number> {
    return new Array(this.itemsPerPage / this.itemsPerRow);
  }
  onChangePage({page}): void {
    this.storeRepository.dispatch(PokemonActions.list.load({
      payload: {
        offset: (page - 1) * this.itemsPerPage,
        limit: this.itemsPerPage
      }
    }));
  }
  onChangePerPage(perPage): void {
    if (perPage === this.itemsPerPage) {
      return;
    }
    this.itemsPerPage = perPage;
    this.onChangePage({ page: 1 });
  }
  onClickPokemon(pokemon: IPokemon): void {
    this.storeRepository.dispatch(PokemonActions.showModal({
      payload: {
        id: pokemon.id
      }
    }));
  }

}
