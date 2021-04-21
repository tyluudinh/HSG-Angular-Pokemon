import { Injectable } from '@angular/core';
import {BaseHttpService} from './base.http.service';
import {map} from 'rxjs/operators';
import {IApiResult} from '../../share/models/api-result.model';
import {IResource} from '../../share/models/resource.model';
import {IPokemon} from '../../share/models/pokemon.model';

@Injectable()
export class PokemonHttpService {
  constructor(private baseHttpService: BaseHttpService) {}
  detail(id): any {
    return this.baseHttpService.get(`/pokemon/${id}`);
  }
  list(params): any {
    return this.baseHttpService.get(`/pokemon`, params).pipe(
      map((data: IApiResult<Array<IResource>>) => {
        return {
          ...data,
          results: data.results.map(d => {
            const id = +d.url.toString().replace(this.baseHttpService.urlRoot + '/pokemon/', '').split('/')[0];
            return {
              name: d.name,
              id,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            } as IPokemon;
          })
        };
      })
    );
  }
}
