import { Component, OnInit } from '@angular/core';
import { TodoApiService } from '../todo-api.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {

  todos = [];
  flag = true;

  constructor(
    private todoApi: TodoApiService,
  ) { }

  ngOnInit(): void {
    this.todoApi.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  toggleTodo(todoToToddle) {
    this.todos = this.todos.map(todo => {
      if (todo.id !== todoToToddle.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed
      };
    });
  }
}
