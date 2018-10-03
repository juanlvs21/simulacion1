import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

// Importar Rutas
import { ROUTES } from "./app.routes";

// Importar Componentes
import { AppComponent } from './app.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { Resultados2Component } from './components/resultados2/resultados2.component';
import { MetodosComponent } from './components/metodos/metodos.component';
import { HistogramaComponent } from './components/histograma/histograma.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    ProyectoComponent,
    TablasComponent,
    ResultadosComponent,
    Resultados2Component,
    MetodosComponent,
    HistogramaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
