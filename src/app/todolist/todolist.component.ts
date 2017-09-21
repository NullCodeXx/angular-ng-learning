// 3
import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.services';
import { TodoAjaxService } from '../shared/todo-ajax.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  // todolist:string[] = ["tab1", "tab2", "tab3"];
  todolist:Object[];
  newTodo:string;
  
  constructor(private todoService:TodoAjaxService) {} //injection du service de dépendance pour angular.

  ngOnInit() { //Dire au service d'aller chercher les todo et de les mettre dans la liste || Methode déclancher juste apres l'injection du service de dépendance.
    // this.todolist = this.todoService.getTodos();
    this.todoService.getAllTodo().then((todos) =>
    this.todolist = <Object[]>todos);
  }

  addTodo() {
    // this.todolist.push(this.newTodo);
    // this.todoService.add(this.newTodo);
  }

  removeTodo(index:number) {
    // this.todolist.splice(index,1);
  }
}
