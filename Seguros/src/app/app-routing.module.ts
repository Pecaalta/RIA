import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AutentificadoGuard } from './guards/autentificado.guard';
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
import { TiposdeseguroNuevoComponent } from './pages/tiposdeseguro-nuevo/tiposdeseguro-nuevo.component';
import { TiposdeseguroListaComponent } from './pages/tiposdeseguro-lista/tiposdeseguro-lista.component';
import { TiposdeseguroVerComponent } from './pages/tiposdeseguro-ver/tiposdeseguro-ver.component';
import { TiposdeseguroEditarComponent } from './pages/tiposdeseguro-editar/tiposdeseguro-editar.component';
import { UserGuard } from './guards/user.guard';
import { ListadoSegurosComponent } from './pages/listado-seguros/listado-seguros.component';
import { AgregarSegurosComponent } from './pages/agregar-seguros/agregar-seguros.component';
import { SegurosListaUsuarioComponent } from './pages/seguros-lista-usuario/seguros-lista-usuario.component';
import { SegurosVerUsuarioComponent } from './pages/seguros-ver-usuario/seguros-ver-usuario.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path:"", component: NoticiasComponent },
  { path:"inicio", component: NoticiasComponent },
  { path:"nosotros", component: NosotrosComponent },
  { path:"servicios", component: ServiciosComponent },
  { path:"contactos", component: ContactosComponent },
  { path:"registro", component: RegistroComponent },
  { path:"linea", canActivateChild:[AutentificadoGuard] , children: [
    
    { path:"", pathMatch: 'full', redirectTo: "linea/noticias/lista" },

    { path:"seguros", children: [
      { path:"", component: ListadoSegurosComponent },
      { path:"lista", component: ListadoSegurosComponent },
      { path:"crea", component: AgregarSegurosComponent },
      { path:"editar/:id", component: AgregarSegurosComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/seguros/lista" },   
    ]},

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

    { path:"tiposdeseguro", children: [
      { path:"", component: TiposdeseguroListaComponent },
      { path:"lista", component: TiposdeseguroListaComponent },
      { path:"crea", component: TiposdeseguroNuevoComponent },
      { path:"editar/:id", component: TiposdeseguroEditarComponent },
      { path:"ver/:id", component: TiposdeseguroVerComponent },
      { path:"**", pathMatch: 'full', redirectTo: "linea/tiposdeseguro/lista" },   
    ]},

    { path:"**", pathMatch: 'full', redirectTo: "noticias" },

  ]},
  { path:"user", canActivateChild:[UserGuard] , children: [
    
    { path:"", pathMatch: 'full', redirectTo: "user/consulta/lista" },

    { path:"consulta", children: [
      { path:"", component: ConsultasListaComponent },
      { path:"lista", component: ConsultasListaComponent },
      { path:"nueva", component: ConsultasNuevaComponent },
      { path:"ver/:id", component: ConsultasVerComponent },
      { path:"**", pathMatch: 'full', redirectTo: "user/consulta/lista" },
    ]},
    { path:"seguros", children: [
      { path:"", component: SegurosListaUsuarioComponent },
      { path:"lista", component: SegurosListaUsuarioComponent },
      { path:"ver/:id", component: SegurosVerUsuarioComponent },
      { path:"**", pathMatch: 'full', redirectTo: "user/seguros/lista" },
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
