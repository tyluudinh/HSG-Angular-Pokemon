import { Component, OnInit, Input } from '@angular/core';
import {IGame} from '../../share/models/game.model';
import {IGeneration} from '../../share/models/generation.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() versions: Array<IGame> = [];
  @Input() generations: Array<IGeneration> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
