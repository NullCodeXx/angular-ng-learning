// 1 Rajout des proprieter et des functions.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-retest',
  templateUrl: './todo-retest.component.html',
  styleUrls: ['./todo-retest.component.css']
})
export class TodoRetestComponent implements OnInit {

  constructor() { }
  // Tableau todoList string.
  todoList:string[] = ["val1", "val2", "val3"];
  // variable vide String.
  str:string = "";
  ngOnInit() {
  }
  // function add
  add() {
    // Push value string this tableau in variable str.
    this.todoList.push(this.str);
  }
  // function delete||remove.
  delete(index:number) { //Utilise un argument 
    this.todoList.splice(index, 1);
  }
}
