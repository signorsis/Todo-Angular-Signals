import { Component, Input } from '@angular/core';
import { Todo } from '../../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  template: `
   <ul>
     @for (todo of todos; track $index) {
       <li>{{todo.title}}</li>
      }
      @empty {
        <li>Nothig to do</li>
      }
      </ul>
      `,
  styles: ``
})
export class TodoListComponent {
  @Input({required: true}) todos!: Todo[]
}
