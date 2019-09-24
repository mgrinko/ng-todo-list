import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TodosPageComponent } from './todos-page/todos-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todos/:todoId', component: TodosPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
