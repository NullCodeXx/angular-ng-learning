import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TemplateComponent } from './template/template.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoRetestComponent } from './todo-retest/todo-retest.component';

@NgModule({
  declarations: [ //Toute class component crée doit être déclarer.
    AppComponent,
    BoucleComponent,
    TemplateComponent,
    TodolistComponent,
    TodoRetestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}