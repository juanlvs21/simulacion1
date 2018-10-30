import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  tabla2 = [
    {
      tipo:'A',
      fx: 0.400,
      fx2: 0.400,
      ic1: 0,
      ic2: 399,
      vel: 4000
    },
    {
      tipo:'B',
      fx: 0.350,
      fx2: 0.750,
      ic1: 400,
      ic2: 749,
      vel: 3500
    },
    {
      tipo:'C',
      fx: 0.250,
      fx2: 1.000,
      ic1: 750,
      ic2: 999,
      vel: 2500
    }
  ]

  tabla3 = [
    {
      kg:5000,
      fx: 0.080,
      fx2: 0.080,
      ic1: 0,
      ic2: 79
    },
    {
      kg:10000,
      fx: 0.110,
      fx2: 0.190,
      ic1: 80,
      ic2: 189
    },
    {
      kg:15000,
      fx: 0.150	,
      fx2: 0.340,
      ic1: 190,
      ic2: 339
    },
    {
      kg:20000,
      fx: 0.230,
      fx2: 0.570,
      ic1: 340,
      ic2: 569
    },
    {
      kg:25000,
      fx: 0.200,
      fx2: 0.77,
      ic1: 570,
      ic2: 769
    },
    {
      kg:30000,
      fx: 0.130,
      fx2:0.900,
      ic1: 770,
      ic2: 899
    },
    {
      kg:35000,
      fx: 0.100,
      fx2: 1.000,
      ic1: 900,
      ic2: 999
    }
  ]
  
  tablar1 = []

  // letras = [];
  // camiones = [];

  r1A:number = 0;
  r1B:number = 0;
  r1C:number = 0;
  
  ht = {
    operador:0,
    obrero:0,
    total:0
  }

  hc = {
    operador:0,
    obrero:0,
    total:0
  }

  he = {
    operador:0,
    obrero:0,
    total:0
  }

  horasdia:number = 0;
  horasextra:number = 0;
  horastotal:number = 0;

  errorcm:boolean = false;
  errorpm:boolean = false;
  errorpmv:boolean = false;
  errorclm:boolean = false;
  errorclm2:boolean = false;

  rn1 = [];
  rn2 = [];

  constructor() {
    this.crearTR()
    this.llenarTR1();
    // console.log(this.tablar1.length)
  }

  crearTR(){
    // ----- TABLA R 1 -----
    for (let i = 0; i < 80; i++) {
      this.tablar1.push(
        {
          dia:0,
          camiones:0,
          rn: 0,
          rn2: 0,
          kg: 0,
          tipo: "",
          kgh:0,
          h:0
        }
      );
    }
  }

  llenarTR1(){
    let camiones = 0;
    let dia = 1;

    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].dia = dia;
      this.tablar1[i].camiones = camiones;
      
      if (camiones < 7) {
        camiones++;
      }else{
        camiones = 0;
        dia++;
      }
    }
    // console.log(this.tablar1)
  }

  generarTR1(){
    this.rn2 = [];
    this.r1A = 0;
    this.r1B = 0;
    this.r1C = 0;
    let rn = 0;
    let rn2 = 0;
    let x = []

    for (let i = 81; i < this.rn1.length; i++) {
      this.rn2.push(this.rn1[i]);
    }

    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].rn = this.rn1[i];
      this.tablar1[i].rn2 = this.rn2[i];

      rn  = (this.tablar1[i].rn) *1000;
      rn2 = (this.rn2[i])*1000;

      if ((rn2 >= 0)&&(rn2 <= 79)) {
        this.tablar1[i].kg = this.tabla3[0].kg;
      }
      if ((rn2 >= 80)&&(rn2 <= 189)) {
          this.tablar1[i].kg = this.tabla3[1].kg;
      }
      if ((rn2 >= 190)&&(rn2 <= 339)) {
          this.tablar1[i].kg = this.tabla3[2].kg;
      }
      if ((rn2 >= 340)&&(rn2 <= 569)) {
          this.tablar1[i].kg = this.tabla3[3].kg;
      }
      if ((rn2 >= 570)&&(rn2 <= 769)) {
          this.tablar1[i].kg = this.tabla3[4].kg;
      }
      if ((rn2 >= 770)&&(rn2 <= 899)) {
          this.tablar1[i].kg = this.tabla3[5].kg;
      }
      if ((rn2 >= 900)&&(rn2 <= 999)) {
          this.tablar1[i].kg = this.tabla3[6].kg;
      }

      for (let j = 0; j < this.tabla2.length; j++) {
        if ((rn >= this.tabla2[j].ic1)&&(rn <= this.tabla2[j].ic2)) {
          this.tablar1[i].tipo = this.tabla2[j].tipo;
          if (this.tablar1[i].tipo == "A") {
            this.tablar1[i].kgh = 4000;
          }
          if (this.tablar1[i].tipo == "B") {
            this.tablar1[i].kgh = 3500;
          }
          if (this.tablar1[i].tipo == "C") {
            this.tablar1[i].kgh = 2500;
          }
        }
      }
    }
    this.calculartotal();
    this.calcularhoras();
    this.calcularhorasdias();
    this.totalpago();
    console.log(this.tablar1)
  }

  totalpago(){
    let heo = (this.horasextra*3)*3000;
    let heo2 = (this.horasextra*6)*1800;
  
    this.he.operador = (heo + (heo*0.5));
    this.he.obrero = (heo2 + (heo2*0.5));
    this.he.total = this.he.operador + this.he.obrero;

    this.hc.operador = (this.horasdia*3)*3000;
    this.hc.obrero = (this.horasdia*6)*1800;
    this.hc.total = this.hc.operador + this.hc.obrero;

    this.ht.operador = this.hc.operador + this.he.operador;
    this.ht.obrero = this.hc.obrero + this.he.obrero;
    this.ht.total = this.ht.operador + this.ht.obrero;
    
  }

  calcularhoras(){
    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].h = (this.tablar1[i].kg)/(this.tablar1[i].kgh);
    }
  }

  calcularhorasdias(){
    this.horasdia = 0;
    this.horasextra = 0;
    this.horastotal = 0;

    for (let i = 0; i < this.tablar1.length; i++) {
      if (this.tablar1[i].camiones != 0) {
        this.horastotal = this.horastotal + this.tablar1[i].h;
      }
    }
    this.horasextra = this.horastotal - 80;
    this.horasdia = this.horastotal - this.horasextra;
  }

  calculartotal(){
    this.r1A = 0;
    this.r1B = 0;
    this.r1C = 0;
    for (let i = 0; i < this.tablar1.length; i++) {
      // for (let i = 0; i < 8; i++) {
        if (this.tablar1[i].tipo == "A") {
          this.r1A = this.r1A + this.tablar1[i].camiones;
          //  this.r1A++;
        }
        if (this.tablar1[i].tipo == "B") {
          this.r1B = this.r1B + this.tablar1[i].camiones;
          // this.r1B++;
        }
        if (this.tablar1[i].tipo == "C") {
          this.r1C = this.r1C + this.tablar1[i].camiones;
          // this.r1C++;
        }
    }
  }

  cuadradomedio(xn:number){
    let xn2 = "";
    let yn;
    let yn2;
    this.errorcm = false;
    // 492,613,736,617,391,823,264,999,13 no da cero pero se repite

    for (let i = 0; i <= 160; i++) {
      yn = xn*xn;
      yn2 = yn.toFixed().split("");
      
      xn2 = yn2[1]+yn2[2]+yn2[3];
      xn = parseInt(xn2);
      this.rn1[i] = xn/1000;
    }

    for (let i = 0; i < this.rn1.length; i++) {
      if ((this.rn1[i] == 0)||(isNaN(this.rn1[i]) == true)) {
        this.errorcm = true;
      }
    }

    if (this.errorcm == true) {
      console.error("Semilla invalida");
    }else{
      // console.log(this.rn1);
      this.generarTR1();
    }
  }

  productomedio(xn1:number,xn:number){
    let xn2;
    let yn2;
    let xnx:number;
    this.errorpm = false;

    // 5-845,62-678, 312-340, 617-639, 276-197, 445-5

    for (let i = 0; i <= 160; i++) {
      xnx = xn1*xn;
      yn2 = xnx.toFixed().split("");
      
      xn2 = yn2[1]+yn2[2]+yn2[3];
      xn1 = xn;
      xn = parseInt(xn2);

      this.rn1[i] = xn/1000;
    }

    for (let i = 0; i < this.rn1.length; i++) {
      if ((this.rn1[i] == 0)||(isNaN(this.rn1[i]) == true)) {
        this.errorpm = true;
      }
    }

    if (this.errorpm == true) {
      console.error("Semilla invalida");
    }else{
      // console.log(this.rn1);
      this.generarTR1();
    }
  }

  productomediovariado(xn:number,c:number){
    let xn2;
    let yn2;
    let xnx:number;
    this.errorpmv = false;

    // 150-136

    for (let i = 0; i <= 160; i++) {
      xnx = xn*c;
      yn2 = xnx.toFixed().split("");
      
      xn2 = yn2[1]+yn2[2]+yn2[3];
      xn = parseInt(xn2);

      this.rn1[i] = xn/1000;
    }

    for (let i = 0; i < this.rn1.length; i++) {
      if ((this.rn1[i] == 0)||(isNaN(this.rn1[i]) == true)) {
        this.errorpmv = true;
      }
    }

    if (this.errorpmv == true) {
      console.error("Semilla invalida");
    }else{
      // console.log(this.rn1);
      this.generarTR1();
    }    
  }

  clinealmixto(xn:number,a:number,c:number,m:number){
    let yn:number;
    this.errorclm = false;

    for (let i = 0; i < 160; i++) {
      yn = ((a*xn)+c);
      xn = yn%m;

      this.rn1[i] = xn/m;
    }    
    for (let i = 0; i < this.rn1.length; i++) {
      if ((this.rn1[i] == 0)||(isNaN(this.rn1[i]) == true)) {
        this.errorclm = true;
      }
    }

    if (this.errorclm == true) {
      console.error("Semilla invalida");
    }else{
      // console.log(this.rn1);
      this.generarTR1();
    } 
  }

  clinealmultiplicativo(xn:number,a:number,c:number,m:number){
    let yn:number;
    this.errorclm2 = false;

    for (let i = 0; i < 160; i++) {
      yn = a*xn;
      xn = yn%m;

      this.rn1[i] = xn/m;
    }    
    for (let i = 0; i < this.rn1.length; i++) {
      if ((this.rn1[i] == 0)||(isNaN(this.rn1[i]) == true)) {
        this.errorclm2 = true;
      }
    }

    if (this.errorclm2 == true) {
      console.error("Semilla invalida");
    }else{
      // console.log(this.rn1);
      this.generarTR1();
    } 
  }

}