// Crée un nouveau component similaire a l'ancien.
import {Component} from '@angular/core';
// Import interface Personne.
import {Personne} from '../shared/personne';


@Component({
    // Nom de la balise html qui seras lié a ce component.
    selector: 'app-template',
    // Le chemin vers le fichier que gère ce component.
    templateUrl : './template.component.html'
})
export class TemplateComponent{
    title = 'app';
    Off: boolean = false;
    //instancy via l'interface (typer)
    personne:Personne={nom: "BOUMAZA", prenom: "Djaafar", age: 0,chien: {nom: 'Milo', race: 'Jacque Ressel'}};
    
    methode() {
      this.title = 'autre chose';
    }

    // Permet de faire ce qui n'est pas.
    buttonONOFF() {
      this.Off = !this.Off;
    }
    // Affiche l'objet contenus dans la variable personne.
    display() {
        console.log(this.personne);
    }
} 