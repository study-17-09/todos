import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';

@Injectable()
export class TodosService {

  BASE_API = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }
  /* CRUD operations */

  // CREATE
  addNew(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.BASE_API + 'todos', todo);
  }

  // READ
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.BASE_API + 'todos');
  }

  getTodo(index: number): Observable<Todo> {
    return this.http.get<Todo>(this.BASE_API + 'todos/' + index);
  }

  // UPDATE
  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.BASE_API + 'todos/' + todo.id, todo);
  }

  // DELETE
  delete(id: number): Observable<any> {
    return this.http.delete(this.BASE_API + 'todos/' + id);
  }
}
