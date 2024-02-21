import { Component, Output, inject,EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Todo } from '../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())">
  <input type="text" placeholder="title..." formControlName="title">
  <input type="text" placeholder="description.." formControlName="description">
<button type="submit" [disabled]="!todoForm.valid">Add Todo</button>
  </form>
  `,
  styles: ``
})
// this here is  a dumb component, whose role is to render a form 
export class TodoFormComponent { 
  @Output() todoSubmitted=new EventEmitter<Todo>()
fb= inject(FormBuilder)

todoForm=this.fb.nonNullable.group({
  title: ['',Validators.required],
  description: ['']
})


}
