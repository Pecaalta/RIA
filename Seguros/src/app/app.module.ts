import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NglModule } from 'ng-lightning';
import { NavPublicaComponent } from './pages/nav-publica/nav-publica.component';
import { NavPrivadaComponent } from './pages/nav-privada/nav-privada.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AgregarNoticiaComponent } from './pages/agregar-noticia/agregar-noticia.component';
import { ConsultarListadoComponent } from './pages/consultar-listado/consultar-listado.component';
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
import { TiposdeseguroNuevoComponent } from './pages/tiposdeseguro-nuevo/tiposdeseguro-nuevo.component';
import { TiposdeseguroListaComponent } from './pages/tiposdeseguro-lista/tiposdeseguro-lista.component';
import { TiposdeseguroVerComponent } from './pages/tiposdeseguro-ver/tiposdeseguro-ver.component';
import { TiposdeseguroEditarComponent } from './pages/tiposdeseguro-editar/tiposdeseguro-editar.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AgregarSegurosComponent } from './pages/agregar-seguros/agregar-seguros.component';
import { ListadoSegurosComponent } from './pages/listado-seguros/listado-seguros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPublicaComponent,
    NavPrivadaComponent,
    NoticiasComponent,
    ContactosComponent,
    RegistroComponent,
    AgregarNoticiaComponent,
    ConsultarListadoComponent,
    NosotrosComponent,
    ListadoNoticiasComponent,
    NavUserComponent,
    ConsultasListaComponent,
    ConsultasNuevaComponent,
    ConsultasVerComponent,
    VerNoticiasComponent,
    ConsultasAdminListadoComponent,
    ConsultasAdminVerComponent,
    TiposdeseguroNuevoComponent,
    TiposdeseguroListaComponent,
    TiposdeseguroVerComponent,
    TiposdeseguroEditarComponent,
    AgregarSegurosComponent,
    ListadoSegurosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NglModule,
    FormsModule, ReactiveFormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
