import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo: any;

  constructor(public todoService: TodosService) { }

  changeStatus(target: any, todo: any): void {
    todo.done = target.checked;
  }

  delete(todo: any): any {
    const index = this.todoService.todos.findIndex(v => v.id === todo.id && v.title === todo.title && v.done === todo.done);
    this.todoService.todos.splice(index, 1);
  }
}
