import { Component, Input } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: any[] = [];

  constructor(public todoService: TodosService) {
  }

  addTodo(todo: string): void {
    const newTodo = {
      id: this.todoService.todos.length,
      title: todo,
      done: false
    };

    this.todoService.todos.push(newTodo);
  }
}
