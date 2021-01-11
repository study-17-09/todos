import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {

  todos = [
    {id: 1, title: 'first', done: false},
    {id: 2, title: 'two', done: false},
    {id: 3, title: 'three', done: false},
    {id: 4, title: 'four', done: true},
    {id: 5, title: 'five', done: false},
  ];
}
