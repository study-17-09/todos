import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  // @ts-ignore
  @Input() todo: Todo;

  @Output()
  statusChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deleted: EventEmitter<Todo> = new EventEmitter<Todo>();
}
