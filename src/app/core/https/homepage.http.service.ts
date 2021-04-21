import { Injectable } from '@angular/core';
import {BaseHttpService} from './base.http.service';
import {map} from 'rxjs/operators';
import {IApiResult} from '../../share/models/api-result.model';
import {IPokemon} from '../../share/models/pokemon.model';
import {Observable} from 'rxjs';
import {IItem} from '../../share/models/item.model';
import {IGame} from '../../share/models/game.model';
import {IGeneration} from '../../share/models/generation.model';
import {IResource} from '../../share/models/resource.model';

@Injectable()
export class HomepageHttpService {
  constructor(private baseHttpService: BaseHttpService) {}
  top10Pokemon(): Observable<Array<IPokemon>> {
    return this.baseHttpService.get(`/pokemon`, {
      offset: 0,
      limit: 10
    }).pipe(
      map((data: IApiResult<Array<IResource>>) => {
        return data.results.map(d => {
          const id = +d.url.toString().replace(this.baseHttpService.urlRoot + '/pokemon/', '').split('/')[0];
          return {
            name: d.name,
            id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          } as IPokemon;
        });
      })
    );
  }
  top10Items(): Observable<Array<IItem>> {
    return this.baseHttpService.get(`/item`, {
      offset: 0,
      limit: 10
    }).pipe(
      map((data: IApiResult<Array<IResource>>) => {
        return data.results.map(d => {
          return {
            ...d,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${d.name}.png`
          } as IItem;
        });
      })
    );
  }
  allGameVersions(): Observable<Array<IGame>> {
    return this.baseHttpService.get(`/version`, {
      offset: 0,
      limit: 100
    }).pipe(
      map((data: IApiResult<Array<IGame>>) => {
        return data.results;
      })
    );
  }
  allGeneration(): Observable<Array<IGeneration>> {
    return this.baseHttpService.get(`/generation`, {
      offset: 0,
      limit: 100
    }).pipe(
      map((data: IApiResult<Array<IGeneration>>) => {
        return data.results;
      })
    );
  }
}
