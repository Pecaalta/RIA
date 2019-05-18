import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsultarListadoComponent } from './pages/consultar-listado/consultar-listado.component';

const routes: Routes = [
  { path:"", pathMatch: 'full', redirectTo: "inicio" },
  { path:"inicio", component: NoticiasComponent },
  { path:"nosotros", component: NosotrosComponent },
  { path:"servicios", component: ServiciosComponent  },
  { path:"contactos", component: ContactosComponent },
  { path:"login", component: LoginComponent },
  { path:"registro", component: RegistroComponent },
  { path:"linea", children: [

    { path:"", pathMatch: 'full', redirectTo: "linea/noticias" },

    { path:"noticias", children: [
      { path:"", pathMatch: 'full', redirectTo: "linea/noticias/lista" },
      { path:"lista", component: ContactosComponent },
      { path:"responder", component: RegistroComponent },
      { path:"crea", component: RegistroComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/noticias/lista" },   
    ]},

    { path:"consulta", children: [
      { path:"", pathMatch: 'full', redirectTo: "linea/consulta/lista" },
      { path:"lista", component: ContactosComponent },
      { path:"edita", component: RegistroComponent },
      { path:"crea", component: RegistroComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/consulta/lista" },
    ]},

    { path:"seguros", children: [
      { path:"", pathMatch: 'full', redirectTo: "linea/seguros/activos" },
      { path:"vensidos ", component: RegistroComponent },
      { path:"activos ", component: RegistroComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/activos/activos" },
    ]},

    { path:"cliente", children: [
      { path:"", pathMatch: 'full', redirectTo: "linea/cliente/lista" },
      { path:"lista ", component: RegistroComponent },
      { path:"{id}", component: RegistroComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/cliente/lista" },

    ]},
    { path:"**", pathMatch: 'full', redirectTo: "noticias" },

  ]},
  { path:"**", pathMatch: 'full', redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
