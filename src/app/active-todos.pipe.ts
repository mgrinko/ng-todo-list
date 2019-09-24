import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeTodos'
})
export class ActiveTodosPipe implements PipeTransform {
  transform(todos: any[]): any[] {
    return todos.filter(todo => !todo.completed);
  }
}
