import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    children:[
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'reporte',
        component : ReporteComponent
      },
      {
        path : 'configuracion',
        component : ConfiguracionComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
