// 3
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolist:string[] = ["tab1", "tab2", "tab3"];

  newTodo:string;
  
  constructor() {}

  ngOnInit() {
  }

  addTodo() {
    this.todolist.push(this.newTodo);
  }

  removeTodo(index:number) {
    this.todolist.splice(index,1);
  }
}
