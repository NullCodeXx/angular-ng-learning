import { Injectable, OnInit } from "@angular/core";

/* Les services a encapsuler la logique
 business d'une application angular
 (les truc du model en gros.
 Il pourront etre facilement injecté et
 partagé entre plusieur component et autre services.
*/

/*
Si on veut injecter des chose dans la class TodoService, pas obligatoire.
un service peut etre directement injecté sans decorateur particulier mais pour qu'il soit lui meme
capable de recevoir des injections, il faut lui mettre le decorateur injectable.
*/

@Injectable()
export class TodoService implements OnInit {
  todolist:string[] = ["tab1", "tab2", "tab3"];

  newTodo:string;
  
  constructor() {}

  ngOnInit() {
  }

  //Récupère la todoList.
  getTodos():string[] {
    return this.todolist;
  }

  addTodo() {
    this.todolist.push(this.newTodo);
  }

  removeTodo(index:number) {
    this.todolist.splice(index,1);
  }
}