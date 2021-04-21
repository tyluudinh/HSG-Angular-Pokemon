import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { ResourceCardComponent } from './components/resource-card/resource-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';

@NgModule({
  declarations: [PokemonCardComponent, ResourceCardComponent, PaginationComponent, PokemonModalComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PokemonCardComponent,
    ResourceCardComponent,
    PaginationComponent,
  ],
  entryComponents: [
    PokemonModalComponent
  ]
})
export class ShareModule { }
