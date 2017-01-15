import { Component } from '@angular/core';
import { Page, Alert, NavController } from 'ionic-angular';
import { Backand } from '../../providers/backand/backand';

/*
  Generated class for the MyTodosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/my-todos/my-todos.html',
  providers: [Backand]
})
export class MyTodosPage {

  todos:any;

  constructor(private nav: NavController, public backandService: Backand) {
       this.loadTodos();
  }

  private loadTodos() {
    this.backandService.getTodos()
    .subscribe(
      data => {
        this.todos = data.data;
      },
      err => this.logError(err)
    );
  }

  public todoSelected(item: {}) {
    console.log('selected item: ', item);
  }

  public createTodo() {
    let prompt = Alert.create({
      title: 'New Todo',
      message: "What do you want to achieve?",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveTodo(data.name);
          }
        }
      ]
    });
    this.nav.present(prompt);
  }

  public saveTodo(name: string) {
    this.backandService.addTodo(name).subscribe(
      data => {
        this.todos.push(data);
      },
      err => this.logError(err)
    );
  }

  public removeTodo(id: string) {
    this.backandService.removeTodo(id).subscribe(
      data => {
        this.loadTodos();
      },
      err => this.logError(err)
    );
  }

  public updateTodo(id: string, atividade: string) {
    let prompt = Alert.create({
      title: 'New Todo',
      message: "O que voce quer atualizar?",
      inputs: [
        {
          name: 'name',
          placeholder: atividade
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.saveTodo(data.name);
          }
        }
      ]
    });
    this.nav.present(prompt);


    this.backandService.updateTodo(id).subscribe(
      data => {
        this.loadTodos();
      },
      err => this.logError(err)
    );
  }

  public logError(err: TemplateStringsArray) {
    console.error('Error: ' + err);
  }
}
