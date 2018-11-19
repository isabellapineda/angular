import { Component, OnInit } from '@angular/core';
import { cursos } from './cursos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  //variables
  title = 'clasa21';
  mostrarCursos = true;
  cursos:cursos[] = [];
  // button;
  elimina;

  //constructor
  constructor(){
    // for (let i = 0; i < 10; i++) {
    //   this.cursos.push(new cursos("curso"+i,i)); 
    // }
    // console.log(this.cursos);
  }
  //oninit
  // ngOnInit(): void {
  //   this.button = document.getElementById("cambiarValorBtn");
  //   this.button.addEventListener("click",this.mostrar);
    
  // }
  public mostrar(){
    console.log("entre");
    this.mostrarCursos = !this.mostrarCursos;
    console.log("this.mostrarCursos")
  }
  public eliminar(curso:cursos){
    alert(curso.nombreCuso);
    this.cursos.splice(1,1); 
  }
  public Agregar(){
    let nombre = prompt("Ingresar el nombre");
    let precio = parseInt(prompt("Ingresar el precio"));

    this.cursos.push(new cursos(nombre,precio));
  }
  /**/
}


