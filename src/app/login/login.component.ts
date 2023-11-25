import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formData = {
    username: '',
    password: ''
  };
  showError = false;

  login(): void {
    // Simulación de autenticación básica
    if (this.formData.username === 'usuario' && this.formData.password === 'contraseña') {
      // Autenticación exitosa, podrías redirigir a otra página
      console.log('Autenticación exitosa');
    } else {
      // Autenticación fallida, muestra un mensaje de error
      this.showError = true;
    }
  }

}
