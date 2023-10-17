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

  getImagenPath(){
    return 'assets/google-maps-2.jpg'
  }

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inico'
    },
    {
      name:'viaje-conductor',
      icon: 'bug-outline',
      redirecTo:'/viaje-conductor'
    },
    {
      name:'viaje-pasajero',
      icon: 'attach-outline',
      redirecTo:'/viaje-pasajero'
    },
    
  ]



  constructor() {}
}
