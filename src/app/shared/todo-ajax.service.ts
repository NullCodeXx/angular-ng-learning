import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/toPromise'; //6 Tranformer en promess
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
    getAllTodo() {
        return this.http.get(this.urlAPI).toPromise();//6 Tranformer en promess  
    }
}

//2 Ajouter dans app.module.ts le module Import.

//7 provider dans notre app.module.js
//8 au lieu d'injecter un service dans le construtor on inject TodoAjaxService dans todo.component.ts