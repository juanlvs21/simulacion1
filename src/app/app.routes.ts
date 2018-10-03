// Importar Rutas
import { Routes } from '@angular/router';

// Importar Componentes
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { Resultados2Component } from './components/resultados2/resultados2.component';
import { MetodosComponent } from './components/metodos/metodos.component';
import { HistogramaComponent } from './components/histograma/histograma.component';


export const ROUTES: Routes = [
    { path: 'presentacion', component: PresentacionComponent},
    { path: 'proyecto', component: ProyectoComponent},
    { path: 'tablas', component: TablasComponent},
    { path: 'metodos', component: MetodosComponent},
    { path: 'resultados', component: ResultadosComponent},
    { path: 'resultados2', component: Resultados2Component},
    { path: 'histograma', component: HistogramaComponent},
    { path: '', pathMatch: 'full', redirectTo: 'presentacion'},
    { path: '**', pathMatch: 'full', redirectTo: 'presentacion'}
];
