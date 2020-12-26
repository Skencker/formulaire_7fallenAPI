import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    const identifiant = form.value['identifiant'];
    const password = form.value['password']
    console.log (identifiant +' '+ password)
  }
  
  addUser (identifiant: string, password: string) {
    let users = [];
    const user ={
      //id : 0,
      identifiant : '',
      password : ''
    };
    user.identifiant = identifiant;
    user.password = password;
    //user.id = this.users[(this.users.lenght -1)].id + 1;
    users.push(user);
    console.log(users);
    
  }
}
