import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';
import {toSignal} from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  template: `
    @if (todo(); as todo ) {
      <h2> Title: {{todo.title}}</h2>
      <p>Description: {{ todo.description || 'No description'}}</p>

    }
    @else {
      <h2> todo not found</h2>
    }
  `,
  styles: `
  :host {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }
  h2 {
    margin-top: 100px;
  }
  `
})
export class DetailComponent {
  private route=inject( ActivatedRoute)
  private todoService=inject(TodoService)

  private paramMap=toSignal(this.route.paramMap) 

  todo=computed(()=>
    this.todoService.todos().find((todo)=>todo.id===this.paramMap()?.get('id'))
  )
}
