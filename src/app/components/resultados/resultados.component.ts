import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: []
})
export class ResultadosComponent implements OnInit {

  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
  }

  generarTR1(){
    this.rs.generarTR1();
  }

}
