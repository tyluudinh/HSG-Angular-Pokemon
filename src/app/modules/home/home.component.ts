import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {StoreRepository} from '../../store/repositories/store.repository';
import {ApiResultStateModel} from '../../share/models/api-result.model';
import {Observable} from 'rxjs';
import {IPokemon} from '../../share/models/pokemon.model';
import {IItem} from '../../share/models/item.model';
import {HomePageActions} from '../../store/actions/homepage.action';
import {PokemonActions} from '../../store/actions/pokemon.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  top10Pokemon$: Observable<ApiResultStateModel<Array<IPokemon>>>;
  top10Item$: Observable<ApiResultStateModel<Array<IItem>>>;
  videosCarousel = [];
  icon = faArrowRight;
  constructor(
    private sanitizer: DomSanitizer,
    private storeRepository: StoreRepository
  ) {
    this.videosCarousel = [
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/D0zYJ1RQ-fs'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1roy4o4tqQM'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/bILE5BEyhdo'),
      this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/uBYORdr_TY8'),
    ];
    this.top10Item$ = this.storeRepository.getStateByProp('homepage', 'top10Items');
    this.top10Pokemon$ = this.storeRepository.getStateByProp('homepage', 'top10Pokemon');
  }

  ngOnInit(): void {
    this.storeRepository.dispatch(HomePageActions.top10Items.load());
    this.storeRepository.dispatch(HomePageActions.top10Pokemon.load());
  }
  onClickPokemon(pokemon: IPokemon): void {
    this.storeRepository.dispatch(PokemonActions.showModal({
      payload: {
        id: pokemon.id
      }
    }));
  }

}
