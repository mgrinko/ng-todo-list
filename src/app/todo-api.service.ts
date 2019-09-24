import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTodos(): Observable<any[]> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos') as Observable<any[]>;
  }
}
