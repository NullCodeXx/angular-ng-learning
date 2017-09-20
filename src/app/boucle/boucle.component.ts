import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle', //Le mettre dans le app-component.html
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {
  //Crée un tableau.
  tableau:string[] = ['ga', 'go', 'gu'];
  constructor() { }

  ngOnInit() {
  }
}
