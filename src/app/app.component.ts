import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  onOff: boolean = false;
  methode() {
    this.title = 'autre chose';
  }

  buttonONOFF() {
    this.onOff = !this.onOff;
  }
}

