import { Injectable } from '@angular/core';
import {BaseEffect} from './base.effect';
import {HomePageActions} from '../actions/homepage.action';
import {HomepageHttpService} from '../../core/https/homepage.http.service';

@Injectable()
export class HomepageEffect {
  constructor(
    private baseEffect: BaseEffect,
    private homepageHttpService: HomepageHttpService,
  ) {}
  top10Pokemon$ = this.baseEffect.api$(HomePageActions.top10Pokemon, () => this.homepageHttpService.top10Pokemon());
  top10Items$ = this.baseEffect.api$(HomePageActions.top10Items, () => this.homepageHttpService.top10Items());
  allGameVersions$ = this.baseEffect.api$(HomePageActions.allGameVersions, () => this.homepageHttpService.allGameVersions());
  allGeneration$ = this.baseEffect.api$(HomePageActions.allGeneration, () => this.homepageHttpService.allGeneration());
}
