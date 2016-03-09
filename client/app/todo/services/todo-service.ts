import {Injectable} from 'angular2/core';
import {TodoModel} from './todo-model';
@Injectable()

export class TodoService {
  todos:TodoModel[] = [
    new TodoModel('eat'),
    new TodoModel('sleep'),
    new TodoModel('code')
   ];

   addTodo(todo:TodoModel) {
     this.todos = [...this.todos, todo];
   }

   toggleTodo(todo:TodoModel){
     // todo.toggle();

     const i = this.todos.indexOf(todo);

     const status = todo.status === 'started' ? 'completed' : 'started'

     const toggledToDo = Object.assign({}, todo, {status})
     this.todos = [
       ...this.todos.slice(0, i), 
       toggledToDo, 
       ...this.todos.slice(i+1)
       ];
   }
}