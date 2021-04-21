import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {ICardImage} from '../../models/card-image.model';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.scss']
})
export class ResourceCardComponent implements OnInit {
  @Input() resource: ICardImage;
  @Output() onClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
