import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb:FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionPassword':new FormControl("",Validators.required),
      'vehiculo': new FormControl(false)
    });

   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        message:'Tienes que llenar todos los campos',
        header:'datos incompletos',
        buttons:['OK']
      });
      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        message:'Registrado con exito',
        header:'Registro',
        buttons:['iniciar sesion']
      });
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password,
      vehiculo:f.vehiculo
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

  }
  loginin(){
    this.navCtrl.navigateRoot('login');
  }

}
