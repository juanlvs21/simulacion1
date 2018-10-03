import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-resultados2',
  templateUrl: './resultados2.component.html',
  styles: []
})
export class Resultados2Component implements OnInit {

  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
    // console.log(this.rs.tablar2)
  }

}
