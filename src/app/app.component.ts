import { Component } from '@angular/core';

interface Componente{
  name:string;
  icon:string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inico'
    },
    {
      name:'Card',
      icon: 'bug-outline',
      redirecTo:'/card'
    },
    {
      name:'Formulario',
      icon: 'attach-outline',
      redirecTo:'/formulario'
    },
  ]



  constructor() {}
}
