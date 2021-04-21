import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from '@angular/router';
// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {ShareModule} from '../../share/share.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {EffectsModule} from '@ngrx/effects';
import {HomepageEffect} from '../../store/effects/homepage.effect';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule.forRoot(),
    ShareModule,
    FontAwesomeModule,
    EffectsModule.forFeature([
      HomepageEffect,
    ])
  ]
})
export class HomeModule { }
