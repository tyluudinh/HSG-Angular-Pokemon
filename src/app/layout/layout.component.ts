import { Component, OnInit } from '@angular/core';
import {StoreRepository} from '../store/repositories/store.repository';
import {Observable} from 'rxjs';
import {IGame} from '../share/models/game.model';
import {IGeneration} from '../share/models/generation.model';
import {HomePageActions} from '../store/actions/homepage.action';
import {ApiResultStateModel} from '../share/models/api-result.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  allGameVersions$: Observable<ApiResultStateModel<Array<IGame>>>;
  allGeneration$: Observable<ApiResultStateModel<Array<IGeneration>>>;
  constructor( private storeRepository: StoreRepository) {
    this.allGameVersions$ = this.storeRepository.getStateByProp('homepage', 'allGameVersions');
    this.allGeneration$ = this.storeRepository.getStateByProp('homepage', 'allGeneration');
  }

  ngOnInit(): void {
    this.storeRepository.dispatch(HomePageActions.allGameVersions.load());
    this.storeRepository.dispatch(HomePageActions.allGeneration.load());
  }

}
