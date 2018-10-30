import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-resultados3',
  templateUrl: './resultados3.component.html',
  styles: []
})
export class Resultados3Component implements OnInit {

  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
  }

}
