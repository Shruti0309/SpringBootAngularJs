import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoDataService} from './../service/data/todo-data.service';
import {Todos} from './../list-todos/list-todos.component'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number
  todo :Todos
  constructor(private route: ActivatedRoute,
  private todoService : TodoDataService,
  private router: Router) { }

  ngOnInit() {
      this.todo = new Todos(this.id,"",new Date(),false);
      this.id = this.route.snapshot.params['id'];

      if(this.id != -1){
      this.todoService.getTodoFromTodoList("Shruti",this.id).subscribe(
        data => {
        this.todo = data
        }
      );
    }
  }

  saveUpdatedTodo(){
    if(this.id == -1){
        this.todoService.addTodo("Shruti",this.todo).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['listTodos']);
          }
        );
    }
    else {
    this.todoService.updateTodo("Shruti",this.id,this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['listTodos']);
      }
    );
  }
  }

}
