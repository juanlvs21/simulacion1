import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styles: []
})
export class MetodosComponent implements OnInit {

  cm = {
    xn:null
  };

  pm = {
    xn1:null,
    xn:null
  };

  pmv = {
    xn:null,
    c:null
  };

  clm = {
    xn:null,
    a:null,
    c:null,
    m:null,
    k:3
  }

  clmul = {
    xn:null,
    a:null,
    c:null,
    m:null,
    k:3
  }

  constructor( public rs:ResultadoService, private router:Router ) { }

  ngOnInit() {
  }

  cuadradom(semilla:NgForm){
    this.cm.xn = null;
    this.pm.xn1 = null;
    this.pm.xn = null;
    this.pmv.xn = null;
    this.pmv.c = null;
    this.clm.xn = null;
    this.clm.a = null;
    this.clm.c = null;
    this.clm.m = null;
    this.clmul.xn = null;
    this.clmul.a = null;
    this.clmul.c = null;
    this.clmul.m = null;

    // console.log(semilla)
    this.rs.cuadradomedio(semilla.value.cm);
    this.cm.xn = 0;
    if (this.rs.errorcm == false) {
      this.router.navigate(['/resultados']);      
    }
  }

  productom(datos:NgForm){
    this.cm.xn = null;
    this.pm.xn1 = null;
    this.pm.xn = null;
    this.pmv.xn = null;
    this.pmv.c = null;
    this.clm.xn = null;
    this.clm.a = null;
    this.clm.c = null;
    this.clm.m = null;

    console.log(datos.value.xn1);
    console.log(datos.value.xn);
    this.rs.productomedio(datos.value.xn1,datos.value.xn);
    this.pm.xn = 0;
    this.pm.xn1 = 0;
    if (this.rs.errorpm == false) {
      this.router.navigate(['/resultados']);      
    }
  }

  productomv(datos:NgForm){
    this.cm.xn = null;
    this.pm.xn1 = null;
    this.pm.xn = null;
    this.pmv.xn = null;
    this.pmv.c = null;
    this.clm.xn = null;
    this.clm.a = null;
    this.clm.c = null;
    this.clm.m = null;

    this.rs.productomediovariado(datos.value.xn,datos.value.c);
    this.pmv.xn = 0;
    this.pmv.c = 0;
    if (this.rs.errorpmv == false) {
      this.router.navigate(['/resultados']);      
    }
  }
  
  clinealm(datos:NgForm){
    this.cm.xn = null;
    this.pm.xn1 = null;
    this.pm.xn = null;
    this.pmv.xn = null;
    this.pmv.c = null;
    this.clm.xn = null;
    this.clm.a = null;
    this.clm.c = null;
    this.clm.m = null;

    this.rs.clinealmixto(datos.value.clmxn,datos.value.clma,datos.value.clmc,datos.value.clmm);
    this.pmv.xn = 0;
    this.pmv.c = 0;
    if (this.rs.errorcm == false) {
      this.router.navigate(['/resultados']);      
    }
  }

  clinealmul(datos:NgForm){
    this.cm.xn = null;
    this.pm.xn1 = null;
    this.pm.xn = null;
    this.pmv.xn = null;
    this.pmv.c = null;
    this.clm.xn = null;
    this.clm.a = null;
    this.clm.c = null;
    this.clm.m = null;

    this.rs.clinealmultiplicativo(datos.value.clmxn,datos.value.clma,datos.value.clmc,datos.value.clmm);
    this.pmv.xn = 0;
    this.pmv.c = 0;
    if (this.rs.errorclm2 == false) {
      this.router.navigate(['/resultados']);      
    }
  }

}
