import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styles: []
})
export class TablasComponent implements OnInit {
  

  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
  }

}
