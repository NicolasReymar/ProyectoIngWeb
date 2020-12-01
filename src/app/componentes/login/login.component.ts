import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    console.log('Componenete inicio de sesion cargado');
  }
}
/*
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const validarFormulario = (e) => {
  switch(e.target.name) {
    case "correo": 
          
    break;
    case "password": 
          
    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e)=> {
  e.preventDefault();
});
*/