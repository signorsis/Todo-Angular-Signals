import { Component, inject } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form/todo-form.component';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list/todo-list/todo-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  template: `
    <h1>Todos</h1>
    <div class="main">

      <div  class="todo-form">
        <app-todo-form (todoSubmitted)="todoService.addTodo($event)"></app-todo-form>
      </div>
      <div class='todo-list'>
        <app-todo-list [todos]="todoService.todos()"> </app-todo-list>
      </div>
    </div>
  `,
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .main {
    margin-top: 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
  }
  .todo-form {
    border-right: 2px solid gray;
  }
  .todo-list {
    display: flex;
    justify-content: center;

  }
  


  `
})
export default class HomeComponent {

todoService=inject(TodoService)


 
}
