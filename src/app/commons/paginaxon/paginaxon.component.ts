import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { Pagination } from './pagination.model';

@Component({
  selector: 'weng-pagination',
  templateUrl: './paginaxon.component.html',
  styleUrls: ['./paginaxon.component.scss']
})
export class PaginaxonComponent implements OnInit{
  pagination: any;
  start: number = 1;
  selected: number;
  isFirstLoad: boolean;
  _pageDetail: Pagination;
  @Input() pageDetail: Pagination;
  @Output() onClick = new EventEmitter<number>();
  constructor() {
    var start = this.start;
    this.pagination = Array.apply(null, {length: 5}).map(function(value, index){
      var num = index + start;
      return num++;
    }); 
  }

  ngOnInit() {
    this.isFirstLoad = true;
  }

  OnClick(num){
    this.selected = num;
    this.isFirstLoad = false;
    this.onClick.emit(num);
  }

}
