import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PokemonCardComponent, ResourceCardComponent, PaginationComponent, PokemonModalComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    PokemonCardComponent,
    ResourceCardComponent,
    PaginationComponent,
    ModalModule,
    BsDropdownModule,
    FontAwesomeModule
  ],
  entryComponents: [
    PokemonModalComponent
  ]
})
export class ShareModule { }
