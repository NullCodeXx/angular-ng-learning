import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Pour le [(ngModel)] = 'title'
  todoRetest = "valeur du app.component.ts";
  title = 'app works!';
  onOff: boolean = false;
  methode() {
    this.title = 'autre chose';
  }

  buttonONOFF() {
    this.onOff = !this.onOff;
  }
}

