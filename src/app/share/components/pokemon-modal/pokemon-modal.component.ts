import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {StoreRepository} from '../../../store/repositories/store.repository';
import {ApiResultStateModel} from '../../models/api-result.model';
import {IPokemonDetail} from '../../models/pokemon-detail.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent implements OnInit {
  id: number;
  pokemonDetail$: Observable<ApiResultStateModel<IPokemonDetail>>;
  constructor(
    public bsModalRef: BsModalRef,
    private store: StoreRepository
  ) {
    this.pokemonDetail$ = this.store.getStateByProp('pokemon', 'detail');
  }

  ngOnInit(): void {
    console.log(this.id);
  }

}
