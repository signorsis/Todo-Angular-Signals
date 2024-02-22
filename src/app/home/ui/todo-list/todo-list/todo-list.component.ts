import { Component, Input } from '@angular/core';
import { Todo } from '../../../../shared/interfaces/todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterLink],
  template: `
   <h2> Todo list</h2>
   <ul>
     @for (todo of todos; track $index) {
      <li class="hasTodo">
        <a routerLink= '/detail/{{todo.id}}' > {{todo.title}} </a>
      </li>
      }
      @empty {
        <li>Nothing to-do</li>
      }
   </ul>
      `,
  styles: `
  :host {
    
    padding: 8px 16px;
    display: flex;
    flex-direction:column;
    gap: 30px;
    align-items: center;
    height: 100vh;
  }
  
  ul {
   color: white;
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: gray;
    height: 100%;
    width: 300px;
  }
  li {
    margin-top: 12px;
    margin-left: 20%;
    list-style:none;
  }
  .hasTodo {
    list-style: decimal;
    width: 50%;
    
  }
  a {
    display: block; 
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
  `
})
export class TodoListComponent {
  @Input({required: true}) todos!: Todo[]
}
