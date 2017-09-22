// Interface pour le fichier todo-ajax.service.ts

export interface Todo {
    id?:number; // Le '?' veut dire optionnel.
    message:string;
}