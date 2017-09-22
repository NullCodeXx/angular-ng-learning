// 3
import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.services';
import { TodoAjaxService } from '../shared/todo-ajax.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  // todolist:string[] = ["tab1", "tab2", "tab3"];
  todolist:Todo[]; //Interface todo.ts dans le dossier shared
  newTodo:string;
  
  constructor(private todoService:TodoAjaxService) {} //injection du service de dépendance pour angular.

  ngOnInit() { //Dire au service d'aller chercher les todo et de les mettre dans la liste || Methode déclancher juste apres l'injection du service de dépendance.
    // this.todolist = this.todoService.getTodos();
    this.todoService.getAllTodo().then((todos) =>
    this.todolist = todos);
  }

  addTodo() {
    // this.todolist.push(this.newTodo);
    // this.todoService.add(this.newTodo);

    /*
    le addTodo attend un object de type Todon donc un object possédant au moins un propriété message
    (et optionnellement une propriété id), on met donc comme argument du addTodo un obkect avec un 
    message dont la valeur sera celle de this.newTodo, 
    qui est une strinf liée par un ngModl a un input du template.
    Une fois la requete lancée et la réponse obtenus,
    on récupère  un todo dans le then qui nous est enenvoyé par le json-server
    c'est en gros todo que l'on vient de lui ajouter avec son id généré en plus.
    On récupere donc ce todo pour l'ajouter a notrre liste histoire de pas refaire une requete 
    de getAll, meme si sa serait envisageable.
    */
    this.todoService.addTodo({message:this.newTodo})
    .then((todo) => this.todolist.push(todo));
  }

  removeTodo(index:number) {
    // this.todolist.splice(index,1);
    this.todoService.removeTodo({id:index, message: 'osef'})
    .then(() => this.todolist = this.todolist.filter((todo) => todo.id !== index));
  }
}
