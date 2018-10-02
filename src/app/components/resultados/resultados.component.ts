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

  prueba = [
    {
      a:'a1',
      b:'b1',
      c:'c1'
    },
    {
      a:'a1',
      b:'b1',
      c:'c2'
    },
    {
      a:'a1',
      b:'b2',
      c:'c1'
    },
    {
      a:'a1',
      b:'b2',
      c:'c2'
    },
    {
      a:'a2',
      b:'b1',
      c:'c1'
    },
    {
      a:'a2',
      b:'b1',
      c:'c2'
    },
    {
      a:'a2',
      b:'b2',
      c:'c1'
    },
    {
      a:'a2',
      b:'b2',
      c:'c2'
    },
  ]

}
