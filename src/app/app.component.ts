import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'list-pagination-angular';

  list = [
    {name: 'Rahul', score: 90, rank: 1},
    {name: 'Max', score: 80, rank: 2},
    {name: 'Sam', score: 70, rank: 3},
    {name: 'Will', score: 60, rank: 4},
    {name: 'Tim', score: 50, rank: 5},
    {name: 'Tom', score: 40, rank: 6},
    {name: 'Harry', score: 30, rank: 7},
    {name: 'Sal', score: 20, rank: 8},
    {name: 'Ram', score: 10, rank: 9},
    {name: 'Ravi', score: 10, rank: 9},
    {name: 'Seeta', score: 10, rank: 9},
    {name: 'Geeta', score: 10, rank: 9},
    {name: 'Parker', score: 10, rank: 9},
  ];

  paginationLength: number;
  startIndexOfListForPage: number;
  lastIndexOfListForPage: number;
  numberOfItemsInPage: number;

  ngOnInit() {
    this.numberOfItemsInPage = 5;
    this.paginationLength = Math.ceil(this.list.length / this.numberOfItemsInPage);
    this.setListIndexForPage(0);
  }

  setListIndexForPage(pageIndex) {
    this.startIndexOfListForPage = pageIndex * this.numberOfItemsInPage;
    this.lastIndexOfListForPage = this.startIndexOfListForPage + this.numberOfItemsInPage;
  }
}
