import { Component, Output, inject,EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Todo, createTodo } from '../../../shared/interfaces/todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  template: `
    <h2>Add New Todos</h2>
    <form [formGroup]="todoForm" (ngSubmit)="todoSubmitted.emit(todoForm.getRawValue())">
  <input type="text" placeholder="title..." formControlName="title">
  <textarea type="text" placeholder="description.." formControlName="description"  cols="30%" rows="5%">
    </textarea>
    <!-- <textarea name="" id="" cols="30" rows="10"> -->
<button type="submit" [ngClass]="{'valid': todoForm.valid, 'invalid' :!todoForm.valid }" [disabled]="!todoForm.valid">Add Todo</button>
  </form>
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
  
     form {
      
      display: flex;
      flex-direction: column;
      
      
      gap: 2rem;
      
     }
     input {
      padding: 8px 16px;
      border: none;
      font-size: 16px;
     }
     textarea {
      padding: 8px 16px;
      font-size: 20px;
     }
     textarea::placeholder {
      font-size: 20px;
     }
     input::placeholder {
      font-size: 16px;
     }
     button {
      display: inline-block;
      width: 20%;
      height: 32px;
      border: none;
      color: white;
     }
     .valid {
      background-color: green;
     }
     .invalid {
      border: 1px solid red;
     }

  `
})
// this here is  a dumb component, whose role is to render a form 
export class TodoFormComponent { 
  @Output() todoSubmitted=new EventEmitter<createTodo>()
fb= inject(FormBuilder)

todoForm=this.fb.nonNullable.group({
  title: ['',Validators.required],
  description: ['']
})


}
