import { Component, OnInit } from '@angular/core';
import {TodoDataService} from './../service/data/todo-data.service'
import {Router} from '@angular/router'

export class Todos{
constructor(
  public id : number,
  public description : string,
  public targetDate :  Date,
  public completionStatus : boolean
){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  message : string;
  todo : Todos[]
  constructor(private todoService : TodoDataService,
  private router: Router) { }


  ngOnInit() {
    this.refreshTodos();
  }

refreshTodos(){
  this.todoService.executeGetTodoList("Shruti").subscribe(
    response => {
      console.log(response);
      this.todo = response;
    }
  );

}
  deleteTodo(id){
    this.todoService.deleteTodoFromTodoList("Shruti",id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo deleted with ${id}`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log(`Todo with ${id} updated`);
    // this.router.navigate[('todos',id)]
    this.router.navigate(['todos', id]);
  }

  addTodo(){
    this.router.navigate(['todos', -1]);
  }

}
