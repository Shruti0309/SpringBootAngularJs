import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Todos} from '../../list-todos/list-todos.component'
import { TODO_API_URL } from './../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http : HttpClient) { }

  executeGetTodoList(username){
    return this.http.get<Todos[]>(`${TODO_API_URL}/users/${username}/todos`);
  }

  deleteTodoFromTodoList(username, id){
    return this.http.delete(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }
  getTodoFromTodoList(username, id){
    return this.http.get<Todos>(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo){
    return this.http.put(`${TODO_API_URL}/users/${username}/todos/${id}`, todo);
  }

  addTodo(username, todo){
    return this.http.post(`${TODO_API_URL}/users/${username}/todos`, todo);
  }

}
