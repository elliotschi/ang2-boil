import {Component} from 'angular2/core';
import {TodoService} from './todo-service';
import {TodoItemRenderer} from './todo-item-renderer';
import {SearchPipe} from './search-pipe';
import {StartPipe} from './start-pipe';

@Component({
  selector: 'todo-list',
  pipes: [SearchPipe, StartPipe],
  directives: [TodoItemRenderer],
  template: 
  `<div>
    <ul>
      <li *ngFor="#todo of todoService.todos | start">
        <todo-item-renderer [todo]="todo"
        (toggle)="todoService.toggleTodo($event)"
        ></todo-item-renderer>
      </li>
    </ul>
  </div>`
})

export class TodoList{

  constructor(public todoService: TodoService){

  }
}

