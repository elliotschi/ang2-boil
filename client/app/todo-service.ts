import {Injectable} from 'angular2/core';
import {TodoModel} from './todo-model';
@Injectable()

export class TodoService {
  todos = [
    new TodoModel();
    new TodoModel();
    new TodoModel();
   ];
}