import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ConsultarListadoComponent } from './pages/consultar-listado/consultar-listado.component';
import { AutentificadoGuard } from './guards/autentificado.guard';
import { SegurosActivosComponent } from './pages/seguros-activos/seguros-activos.component';
import { SegurosVencidosComponent } from './pages/seguros-vencidos/seguros-vencidos.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';
import { ConsultarVerComponent } from './pages/consultar-ver/consultar-ver.component';
import { ListadoNoticiasComponent } from './pages/listado-noticias/listado-noticias.component';
import { AgregarNoticiaComponent } from './pages/agregar-noticia/agregar-noticia.component';
import { VerNoticiasComponent } from './pages/ver-noticias/ver-noticias.component';

//Consultas - Lucas
import { ConsultasListaComponent } from "./pages/consultas-lista/consultas-lista.component";
import { ConsultasNuevaComponent } from './pages/consultas-nueva/consultas-nueva.component';
import { ConsultasVerComponent } from './pages/consultas-ver/consultas-ver.component';
import { ConsultasAdminListadoComponent } from './pages/consultas-admin-listado/consultas-admin-listado.component';
import { ConsultasAdminVerComponent } from './pages/consultas-admin-ver/consultas-admin-ver.component';

//Tipos de seguro - Mariano
import { TiposdeseguroNuevoComponent } from './tiposdeseguro-nuevo/tiposdeseguro-nuevo.component';

const routes: Routes = [
  { path:"", component: NoticiasComponent },
  { path:"inicio", component: NoticiasComponent },
  { path:"nosotros", component: NosotrosComponent },
  { path:"servicios", component: ServiciosComponent  },
  { path:"contactos", component: ContactosComponent },
  { path:"registro", component: RegistroComponent },
  { path:"linea", canActivateChild:[AutentificadoGuard] , children: [
    
    { path:"", pathMatch: 'full', redirectTo: "linea/noticias/lista" },

    { path:"noticias", children: [
      { path:"", component: ListadoNoticiasComponent },
      { path:"lista", component: ListadoNoticiasComponent },
      { path:"crea", component: AgregarNoticiaComponent },
      { path:"editar/:id", component: AgregarNoticiaComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/noticias/lista" },   
    ]},

    { path:"consulta", children: [
      { path:"", component: ConsultasAdminListadoComponent },
      { path:"lista", component: ConsultasAdminListadoComponent },
      { path:"ver/:id", component: ConsultasAdminVerComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/consulta/lista" },
    ]},

    { path:"seguros", children: [
      { path:"", component: SegurosActivosComponent },
      { path:"vensidos ", component: SegurosVencidosComponent },
      { path:"activos ", component: SegurosActivosComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/activos/activos" },
    ]},

    { path:"tiposdeseguro", children: [
   //   { path:"", component: ListadoNoticiasComponent },
   //   { path:"lista", component: ListadoNoticiasComponent },
      { path:"crea", component: TiposdeseguroNuevoComponent },
   //   { path:"editar/:id", component: AgregarNoticiaComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/tiposdeseguro/lista" },   
    ]},

    { path:"cliente", children: [
      { path:"", pathMatch: 'full', redirectTo: "linea/cliente/lista" },
      { path:"lista ", component: ListaClienteComponent },
      { path:"{id}", component: ConsultarClienteComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/cliente/lista" },

    ]},
    { path:"**", pathMatch: 'full', redirectTo: "noticias" },

  ]},
  { path:"user", canActivateChild:[AutentificadoGuard] , children: [
    
    { path:"", pathMatch: 'full', redirectTo: "user/consulta/lista" },

    { path:"consulta", children: [
      { path:"", component: ConsultasListaComponent },
      { path:"lista", component: ConsultasListaComponent },
      { path:"nueva", component: ConsultasNuevaComponent },
      { path:"ver/:id", component: ConsultasVerComponent },
      { path:"**", pathMatch: 'full', redirectTo: "user/consulta/lista" },
    ]},
    { path:"**", pathMatch: 'full', redirectTo: "consulta" },

  ]},
  { path:":id", component: VerNoticiasComponent },
  { path:"**", pathMatch: 'full', redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
