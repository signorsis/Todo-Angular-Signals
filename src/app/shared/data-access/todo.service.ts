import { Injectable, signal } from '@angular/core';
import { Todo, createTodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  #todos= signal <Todo[]>([])

  todos=this.#todos.asReadonly();

  addTodo(todo:createTodo) {
    this.#todos.update(
      (todos)=>
      [...todos,{...todo, id: Date.now().toString()}])

  }
}
