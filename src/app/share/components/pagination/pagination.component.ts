import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems = 0;
  @Input() itemsPerPage = 20;
  @Output() pageChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
