import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styles: []
})
export class TablasComponent implements OnInit {
  
  tabla1 = [
    {
      camiones:0,
      fx: 0.050,
      fx2: 0.050,
      ic:'000 - 049'
    },
    {
      camiones:1,
      fx: 0.150,
      fx2: 0.200,
      ic:'050 - 199'
    },
    {
      camiones:2,
      fx: 0.220,
      fx2: 0.420,
      ic:'200 - 419'
    },
    {
      camiones:3,
      fx: 0.220,
      fx2: 0.640,
      ic:'420 - 639'
    },
    {
      camiones:4,
      fx: 0.170,
      fx2: 0.810,
      ic:'640 - 809'
    },
    {
      camiones:5,
      fx: 0.110,
      fx2: 0.920,
      ic:'810 - 919'
    },
    {
      camiones:6,
      fx: 0.050,
      fx2: 0.970,
      ic:'920 - 969'
    },
    {
      camiones:7,
      fx: 0.030,
      fx2: 1.000,
      ic:'970 - 999'
    }
  ]
  
  constructor( public rs:ResultadoService ) { }

  ngOnInit() {
  }

}
