import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NglModule } from 'ng-lightning';
import { NavPublicaComponent } from './pages/nav-publica/nav-publica.component';
import { NavPrivadaComponent } from './pages/nav-privada/nav-privada.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AgregarNoticiaComponent } from './pages/agregar-noticia/agregar-noticia.component';
import { ConsultarListadoComponent } from './pages/consultar-listado/consultar-listado.component';
import { ConsultarVerComponent } from './pages/consultar-ver/consultar-ver.component';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';
import { ListaClienteComponent } from './pages/lista-cliente/lista-cliente.component';
import { SegurosAsignadoComponent } from './pages/seguros-asignado/seguros-asignado.component';
import { SegurosVencidosComponent } from './pages/seguros-vencidos/seguros-vencidos.component';
import { SegurosActivosComponent } from './pages/seguros-activos/seguros-activos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ListadoNoticiasComponent } from './pages/listado-noticias/listado-noticias.component';
import { NavUserComponent } from './pages/nav-user/nav-user.component';
import { ConsultasListaComponent } from './pages/consultas-lista/consultas-lista.component';
import { ConsultasNuevaComponent } from './pages/consultas-nueva/consultas-nueva.component';
import { ConsultasVerComponent } from './pages/consultas-ver/consultas-ver.component';
import { VerNoticiasComponent } from './pages/ver-noticias/ver-noticias.component';
import { ConsultasAdminListadoComponent } from './pages/consultas-admin-listado/consultas-admin-listado.component';
import { ConsultasAdminVerComponent } from './pages/consultas-admin-ver/consultas-admin-ver.component';
import { TiposdeseguroNuevoComponent } from './tiposdeseguro-nuevo/tiposdeseguro-nuevo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPublicaComponent,
    NavPrivadaComponent,
    NoticiasComponent,
    ServiciosComponent,
    ContactosComponent,
    LoginComponent,
    RegistroComponent,
    AgregarNoticiaComponent,
    ConsultarListadoComponent,
    ConsultarVerComponent,
    ConsultarClienteComponent,
    ListaClienteComponent,
    SegurosAsignadoComponent,
    SegurosVencidosComponent,
    SegurosActivosComponent,
    NosotrosComponent,
    ListadoNoticiasComponent,
    NavUserComponent,
    ConsultasListaComponent,
    ConsultasNuevaComponent,
    ConsultasVerComponent,
    VerNoticiasComponent,
    ConsultasAdminListadoComponent,
    ConsultasAdminVerComponent,
    TiposdeseguroNuevoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NglModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
