import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise'; //6 Tranformer en promess
import { Todo } from "./todo";
/*
rx existe dans tout les languages (api), rx par defaut viens charger avec quasiment
*/


@Injectable() // INjecttion de dépendance a l'interieur de la class.
export class TodoAjaxService {
    //4 ajoute une propriété = url web.
    private urlAPI:string = 'http://localhost:3000/Todo'; //port 3000 npm run json.

    //3 crée le construtor. 
    constructor(private http:HttpClient) {} //Import, le typage est le module.

    //5 crée une methode
    getAllTodo():Promise<Todo[]> {
        /*
        Pour faire une requete get avec le hhtpClient on appel juste la methode get
        avec la l'url de l'api entre parenthèse. Cela nous renverra un Observable<Object>,
        que l'on peut convertir en Promise<Object> avec toPromise();

        Pour changer le type de l'observable/promise, on peut
        */


        // <Todo[]> viens de l'interface du fichier todo.ts.
        return this.http.get<Todo[]>(this.urlAPI).toPromise();//6 Tranformer en promess  
    }
    addTodo(todo:Todo):Promise<Todo> {
        /*
        Le post fonctionne globalement pareil, il faut juste mettre en deuxième argument
        le body de la requête.
        */
        return this.http.post<Todo>(this.urlAPI, todo).toPromise();
    }

    removeTodo(todo:Todo):Promise<any> {
        return this.http.delete(this.urlAPI+'/'+todo.id).toPromise();
    }

}

//2 Ajouter dans app.module.ts le module Import.

//7 provider dans notre app.module.js
//8 au lieu d'injecter un service dans le construtor on inject TodoAjaxService dans todo.component.ts