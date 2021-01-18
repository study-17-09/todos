import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(public todoService: TodosService) {
  }

  ngOnInit(): void {
    this._getAll();
  }

  addTodo(title: string): void {
    const todo: Partial<Todo> = {
      title,
      done: false
    };

    this.todoService.addNew(todo).subscribe(() => this._getAll());
  }

  changeStatus(obj: {target: any, todo: Todo}): void {
    obj.todo.done = obj.target.checked;

    this.todoService.updateTodo(obj.todo).subscribe(() => this._getAll());
  }

  delete(todo: Todo): void {
    this.todoService.delete(todo.id).subscribe(() => this._getAll());
  }

  private _getAll(): void {
    this.todoService.getAll().subscribe(
      todos => this.todos = todos
    );
  }
}
