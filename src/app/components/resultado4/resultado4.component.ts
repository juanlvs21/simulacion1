import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-resultado4',
  templateUrl: './resultado4.component.html',
  styles: []
})
export class Resultado4Component implements OnInit {

  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
  }

}
