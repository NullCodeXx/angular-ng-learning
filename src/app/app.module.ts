import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BoucleComponent } from './boucle/boucle.component';
import { TemplateComponent } from './template/template.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoRetestComponent } from './todo-retest/todo-retest.component';
import {TodoService} from './shared/todo.services';
import {HttpClientModule} from '@angular/common/http';
import { TodoAjaxService } from './shared/todo-ajax.service';

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
    HttpClientModule //Pour Ajax || Importer.
  ],
  providers: [TodoService, TodoAjaxService], //rend les component accessible au parent et enfant.
  bootstrap: [AppComponent]
})
export class AppModule {}