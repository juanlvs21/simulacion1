import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importar Rutas
import { ROUTES } from "./app.routes";

// Importar Componentes
import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { Resultados2Component } from './components/resultados2/resultados2.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    ProyectoComponent,
    TablasComponent,
    ResultadosComponent,
    Resultados2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
