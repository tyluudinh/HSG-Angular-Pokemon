import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {HomepageEffect} from '../store/effects/homepage.effect';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ShareModule} from '../share/share.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    EffectsModule.forFeature([
      HomepageEffect,
    ]),
    ShareModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
