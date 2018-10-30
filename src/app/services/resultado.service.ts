import { Injectable } from '@angular/core';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
 
  tabla1 = [
    {
      camiones:0,
      fx: 0.050,
      fx2: 0.050,
      ic1: 0,
      ic2: 49
    },
    {
      camiones:1,
      fx: 0.150,
      fx2: 0.200,
      ic1: 50,
      ic2: 199
    },
    {
      camiones:2,
      fx: 0.220,
      fx2: 0.420,
      ic1: 200,
      ic2: 419
    },
    {
      camiones:3,
      fx: 0.220,
      fx2: 0.640,
      ic1: 420,
      ic2: 639
    },
    {
      camiones:4,
      fx: 0.170,
      fx2: 0.810,
      ic1: 640,
      ic2: 809
    },
    {
      camiones:5,
      fx: 0.110,
      fx2: 0.920,
      ic1: 810,
      ic2: 919
    },
    {
      camiones:6,
      fx: 0.050,
      fx2: 0.970,
      ic1: 920,
      ic2: 969
    },
    {
      camiones:7,
      fx: 0.030,
      fx2: 1.000,
      ic1: 970,
      ic2: 999
    }
  ]

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

  tablar2 = []

  tablar3 = []

  // letras = [];
  // camiones = [];

  r1A:number = 0;
  r1B:number = 0;
  r1C:number = 0;
  
  // ht = {
  //   operador:0,
  //   obrero:0,
  //   total:0
  // }

  // hc = {
  //   operador:0,
  //   obrero:0,
  //   total:0
  // }

  // he = {
  //   operador:0,
  //   obrero:0,
  //   total:0
  // }

  // horasdia:number = 0;
  horasextra:number = 0;
  // horastotal:number = 0;
  totalextra:number = 0;
  
  pagototal:number = 0;

  errorcm:boolean = false;
  errorpm:boolean = false;
  errorpmv:boolean = false;
  errorclm:boolean = false;
  errorclm2:boolean = false;

  rn1 = [];
  rn2 = [];
  rn3 = [];

  constructor() {
    this.crearTR()
    this.crearTR2()
    this.crearTR3()
    this.llenarTR1();
    // console.log(this.tablar1.length)
  }

  crearTR(){
    // ----- TABLA R 1 -----
    for (let i = 0; i < 10; i++) {
      this.tablar1.push(
        {
          dia:0,
          camiones:0,
          rn1: 0,
          rn2: 0,
          rn3: 0,
          kg: 0,
          kgc: 0,
          tipo: "",
          kgh:0,
          h:0
        }
      );
    }
  }

  llenarTR1(){

    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].dia = i+1;
    }
    // console.log(this.tablar1)
  }

  crearTR2(){
    for (let i = 0; i < 10; i++) {
      this.tablar2.push(
        {
          dia:0,
          camiones:0,
          hc:0,
          c1:0,
          c2:0,
          c3:0,
          he1:0,
          he2:0,
          he3:0
        }
      )
    }
  }

  crearTR3(){
    for (let i = 0; i < 10; i++) {
      this.tablar3.push(
        {
          dia:0,
          camiones:0,
          hc:0,
          pec1:0,
          po1c1:0,
          po2c1:0,
          pec2:0,
          po1c2:0,
          po2c2:0,
          pec3:0,
          po1c3:0,
          po2c3:0,
          eec1:0,
          eo1c1:0,
          eo2c1:0,
          eec2:0,
          eo1c2:0,
          eo2c2:0,
          eec3:0,
          eo1c3:0,
          eo2c3:0
        }
      )
    }
  }

  generarTR1(){
    this.rn2 = [];
    this.rn3 = [];
    let rn1 = 0;
    let rn2 = 0;
    let rn3 = 0;

    for (let i = 11; i < this.rn1.length; i++) {
      this.rn2.push(this.rn1[i])
    }

    for (let i = 21; i < this.rn1.length; i++) {
      this.rn3.push(this.rn1[i])
    }

    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].rn1 = this.rn1[i]
      this.tablar1[i].rn2 = this.rn2[i]
      this.tablar1[i].rn3 = this.rn3[i]

      rn1  = (this.tablar1[i].rn1) *1000;
      rn2  = (this.tablar1[i].rn2) *1000;
      rn3  = (this.tablar1[i].rn3) *1000;

      if ((rn3 >= 0)&&(rn3 <= 79)) {
        this.tablar1[i].kg = this.tabla3[0].kg;
      }
      if ((rn3 >= 80)&&(rn3 <= 189)) {
          this.tablar1[i].kg = this.tabla3[1].kg;
      }
      if ((rn3 >= 190)&&(rn3 <= 339)) {
          this.tablar1[i].kg = this.tabla3[2].kg;
      }  
      if ((rn3 >= 340)&&(rn3 <= 569)) {
          this.tablar1[i].kg = this.tabla3[3].kg;
      }
      if ((rn3 >= 570)&&(rn3 <= 769)) {
          this.tablar1[i].kg = this.tabla3[4].kg;
      }
      if ((rn3 >= 770)&&(rn3 <= 899)) {
          this.tablar1[i].kg = this.tabla3[5].kg;
      }
      if ((rn3 >= 900)&&(rn3 <= 999)) {
          this.tablar1[i].kg = this.tabla3[6].kg;
      }

      for (let j = 0; j < this.tabla1.length; j++) {
        if ((rn1 >= this.tabla1[j].ic1)&&(rn1 <= this.tabla1[j].ic2)) {
          this.tablar1[i].camiones = this.tabla1[j].camiones;
        }
      }

      for (let j = 0; j < this.tabla2.length; j++) {
        if ((rn2 >= this.tabla2[j].ic1)&&(rn2 <= this.tabla2[j].ic2)) {
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
      this.tablar1[i].kgc = this.tablar1[i].camiones * this.tablar1[i].kg;
    }

    this.calcularhoras();      
    this.calculartotal();
    this.generarTR2();
    this.calcularhorasdias()
    // this.totalpago();
    // console.log(this.tablar1)
  }

  generarTR2(){
    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar2[i].dia = this.tablar1[i].dia
      this.tablar2[i].camiones = this.tablar1[i].camiones

      if (this.tablar1[i].camiones != 0) {
        this.tablar2[i].hc = this.tablar1[i].kg/this.tablar1[i].kgh
      }

      if (this.tablar1[i].camiones == 1) {
        this.tablar2[i].c1 = this.tablar2[i].hc
      }
      if (this.tablar1[i].camiones == 2) {
        this.tablar2[i].c1 = this.tablar2[i].hc
        this.tablar2[i].c2 = this.tablar2[i].hc
      }
      if (this.tablar1[i].camiones == 3) {
        this.tablar2[i].c1 = this.tablar2[i].hc
        this.tablar2[i].c2 = this.tablar2[i].hc
        this.tablar2[i].c3 = this.tablar2[i].hc
      }
      if (this.tablar1[i].camiones == 4) {
        this.tablar2[i].c1 = (this.tablar2[i].hc)*2
        this.tablar2[i].c2 = this.tablar2[i].hc
        this.tablar2[i].c3 = this.tablar2[i].hc
      }
      if (this.tablar1[i].camiones == 5) {
        this.tablar2[i].c1 = (this.tablar2[i].hc)*2
        this.tablar2[i].c2 = (this.tablar2[i].hc)*2
        this.tablar2[i].c3 = this.tablar2[i].hc
      }
      if (this.tablar1[i].camiones == 6) {
        this.tablar2[i].c1 = (this.tablar2[i].hc)*2
        this.tablar2[i].c2 = (this.tablar2[i].hc)*2
        this.tablar2[i].c3 = (this.tablar2[i].hc)*2
      }
      if (this.tablar1[i].camiones == 7) {
        this.tablar2[i].c1 = (this.tablar2[i].hc)*3
        this.tablar2[i].c2 = (this.tablar2[i].hc)*2
        this.tablar2[i].c3 = (this.tablar2[i].hc)*2
      }

      for (let i = 0; i < this.tablar2.length; i++) {
        if (this.tablar2[i].c1 > 8) {
          this.tablar2[i].he1 = this.tablar2[i].c1 - 8
        }
        if ((this.tablar2[i].c1 > 8)&&(this.tablar2[i].c2 > 8)) {
          this.tablar2[i].he1 = this.tablar2[i].c1 - 8
          this.tablar2[i].he2 = this.tablar2[i].c2 - 8
        }
        if ((this.tablar2[i].c1 > 8)&&(this.tablar2[i].c2 > 8)&&(this.tablar2[i].c3 > 8)) {
          this.tablar2[i].he1 = this.tablar2[i].c1 - 8
          this.tablar2[i].he2 = this.tablar2[i].c2 - 8
          this.tablar2[i].he3 = this.tablar2[i].c3 - 8
        }
      }
    }
    this.generarTR3()
  }

  generarTR3(){
    for (let i = 0; i < this.tablar2.length; i++) {
      this.tablar3[i].dia = this.tablar2[i].dia
      this.tablar3[i].camiones = this.tablar2[i].camiones
      this.tablar3[i].hc = this.tablar2[i].hc    
    }
    this.calcularpagoextra()
    this.calcularpagocontrato()
  }

  // totalpago(){
  //   let heo = (this.horasextra*3)*3000;
  //   let heo2 = (this.horasextra*6)*1800;
  
  //   this.he.operador = (this.horasextra*3)*3000;
  //   this.he.obrero = (this.horasextra*6)*1800;
  //   this.he.total = this.he.operador + this.he.obrero;

  //   this.hc.operador = (this.horasdia*3)*3000;
  //   this.hc.obrero = (this.horasdia*6)*1800;
  //   this.hc.total = this.hc.operador + this.hc.obrero;

  //   this.ht.operador = this.hc.operador + this.he.operador;
  //   this.ht.obrero = this.hc.obrero + this.he.obrero;
  //   this.ht.total = this.ht.operador + this.ht.obrero;
    
  // }

  calcularhoras(){
    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].h = (this.tablar1[i].kgc)/(this.tablar1[i].kgh);
    }
  }

  calcularhorasdias(){
    this.horasextra = 0;

    for (let i = 0; i < this.tablar2.length; i++) {
      this.horasextra = this.horasextra + (this.tablar2[i].he1 + this.tablar2[i].he2 + this.tablar2[i].he3 )
    }
  }

  calcularpagoextra(){
    let h = [];
    let x = 0;
    let x2 = 0;

    for (let i = 0; i < this.tablar2.length; i++) {
      if (this.tablar2[i].he1 != 0) {
        h = this.tablar2[i].he1.toString().split('.')
        if (h.length = 1) {
          // Operador Elevador
          x = (this.tablar2[i].he1)*1500;
          this.tablar3[i].eec1 = x
          // Obrero 1
          x = (this.tablar2[i].he1)*900;
          this.tablar3[i].eo1c1 = x
          // Obrero 2
          x = (this.tablar2[i].he1)*900;
          this.tablar3[i].eo2c1 = x
        }else{
          // Operador Elevador
          x = (parseInt(h[0]))*1500;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*1500
          }else{
            x2 = (parseInt(h[1])/100)*1500
          }
          this.tablar3[i].eec1 = x + x2
          // Obrero 1
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].eo1c1 = x + x2
          // Obrero 2
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].eo2c1 = x + x2
        }
      }
      if (this.tablar2[i].he2 != 0) {
        h = this.tablar2[i].he2.toString().split('.')
        if (h.length = 1) {
          // Operador Elevador
          x = (this.tablar2[i].he2)*1500;
          this.tablar3[i].eec2 = x
          // Obrero 1
          x = (this.tablar2[i].he2)*900;
          this.tablar3[i].eo1c2 = x
          // Obrero 2
          x = (this.tablar2[i].he2)*900;
          this.tablar3[i].eo2c2 = x
        }else{
          // Operador Elevador
          x = (parseInt(h[0]))*1500;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*1500
          }else{
            x2 = (parseInt(h[1])/100)*1500
          }
          this.tablar3[i].eec2 = x + x2
          // Obrero 1
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].eo1c2 = x + x2
          // Obrero 2
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].eo2c2 = x + x2
        }
        if (this.tablar2[i].he3 != 0) {
          h = this.tablar2[i].he3.toString().split('.')
          if (h.length = 1) {
            // Operador Elevador
            x = (this.tablar2[i].he3)*1500;
            this.tablar3[i].eec3 = x
            // Obrero 1
            x = (this.tablar2[i].he3)*900;
            this.tablar3[i].eo1c3 = x
            // Obrero 2
            x = (this.tablar2[i].he3)*900;
            this.tablar3[i].eo2c3 = x
          }else{
            // Operador Elevador
            x = (parseInt(h[0]))*1500;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*1500
            }else{
              x2 = (parseInt(h[1])/100)*1500
            }
            this.tablar3[i].eec3 = x + x2
            // Obrero 1
            x = (parseInt(h[0]))*900;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*900
            }else{
              x2 = (parseInt(h[1])/100)*900
            }
            this.tablar3[i].eo1c3 = x + x2
            // Obrero 2
            x = (parseInt(h[0]))*900;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*900
            }else{
              x2 = (parseInt(h[1])/100)*900
            }
            this.tablar3[i].eo2c3 = x + x2
          }
      }
      }
    }

    for (let i = 0; i < this.tablar3.length; i++) {
      this.totalextra = this.totalextra + this.tablar3[i].eec1
      this.totalextra = this.totalextra + this.tablar3[i].eo1c1
      this.totalextra = this.totalextra + this.tablar3[i].eo2c1
      this.totalextra = this.totalextra + this.tablar3[i].eec2
      this.totalextra = this.totalextra + this.tablar3[i].eo1c2
      this.totalextra = this.totalextra + this.tablar3[i].eo2c2
      this.totalextra = this.totalextra + this.tablar3[i].eec3
      this.totalextra = this.totalextra + this.tablar3[i].eo1c3
      this.totalextra = this.totalextra + this.tablar3[i].eo2c3
    }

    console.log(this.totalextra)
  }

  calcularpagocontrato(){
    let h = [];
    let x = 0;
    let x2 = 0;

    for (let i = 0; i < this.tablar2.length; i++) {
      if (this.tablar2[i].c1 != 0) {
        h = this.tablar2[i].c1.toString().split('.')
        if (h.length = 1) {
          // Operador Elevador
          x = (this.tablar2[i].c1)*1500;
          this.tablar3[i].pec1 = x
          // Obrero 1
          x = (this.tablar2[i].c1)*900;
          this.tablar3[i].po1c1 = x
          // Obrero 2
          x = (this.tablar2[i].he1)*900;
          this.tablar3[i].po2c1 = x
        }else{
          // Operador Elevador
          x = (parseInt(h[0]))*1500;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*1500
          }else{
            x2 = (parseInt(h[1])/100)*1500
          }
          this.tablar3[i].pec1 = x + x2
          // Obrero 1
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].po1c1 = x + x2
          // Obrero 2
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].po2c1 = x + x2
        }
      }
      if (this.tablar2[i].c2 != 0) {
        h = this.tablar2[i].c2.toString().split('.')
        if (h.length = 1) {
          // Operador Elevador
          x = (this.tablar2[i].c2)*1500;
          this.tablar3[i].pec2 = x
          // Obrero 1
          x = (this.tablar2[i].c2)*900;
          this.tablar3[i].po1c2 = x
          // Obrero 2
          x = (this.tablar2[i].c2)*900;
          this.tablar3[i].po2c2 = x
        }else{
          // Operador Elevador
          x = (parseInt(h[0]))*1500;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*1500
          }else{
            x2 = (parseInt(h[1])/100)*1500
          }
          this.tablar3[i].pec2 = x + x2
          // Obrero 1
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].po1c2 = x + x2
          // Obrero 2
          x = (parseInt(h[0]))*900;
          if (parseInt(h[i]) <10) {
            x2 = (parseInt(h[1])/10)*900
          }else{
            x2 = (parseInt(h[1])/100)*900
          }
          this.tablar3[i].po2c2 = x + x2
        }
        if (this.tablar2[i].c3 != 0) {
          h = this.tablar2[i].c3.toString().split('.')
          if (h.length = 1) {
            // Operador Elevador
            x = (this.tablar2[i].c3)*1500;
            this.tablar3[i].pec3 = x
            // Obrero 1
            x = (this.tablar2[i].c3)*900;
            this.tablar3[i].po1c3 = x
            // Obrero 2
            x = (this.tablar2[i].c3)*900;
            this.tablar3[i].po2c3 = x
          }else{
            // Operador Elevador
            x = (parseInt(h[0]))*1500;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*1500
            }else{
              x2 = (parseInt(h[1])/100)*1500
            }
            this.tablar3[i].pec3 = x + x2
            // Obrero 1
            x = (parseInt(h[0]))*900;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*900
            }else{
              x2 = (parseInt(h[1])/100)*900
            }
            this.tablar3[i].po1c3 = x + x2
            // Obrero 2
            x = (parseInt(h[0]))*900;
            if (parseInt(h[i]) <10) {
              x2 = (parseInt(h[1])/10)*900
            }else{
              x2 = (parseInt(h[1])/100)*900
            }
            this.tablar3[i].po2c3 = x + x2
          }
      }
      }
    }

    for (let i = 0; i < this.tablar3.length; i++) {
      this.totalextra = this.totalextra + this.tablar3[i].eec1
      this.totalextra = this.totalextra + this.tablar3[i].eo1c1
      this.totalextra = this.totalextra + this.tablar3[i].eo2c1
      this.totalextra = this.totalextra + this.tablar3[i].eec2
      this.totalextra = this.totalextra + this.tablar3[i].eo1c2
      this.totalextra = this.totalextra + this.tablar3[i].eo2c2
      this.totalextra = this.totalextra + this.tablar3[i].eec3
      this.totalextra = this.totalextra + this.tablar3[i].eo1c3
      this.totalextra = this.totalextra + this.tablar3[i].eo2c3
    }

    console.log(this.totalextra)
    this.calcularpagototal()
  }

  calcularpagototal(){
    for (let i = 0; i < this.tablar3.length; i++) {
      this.pagototal = this.pagototal + this.tablar3[i].pec1
      this.pagototal = this.pagototal + this.tablar3[i].po1c1
      this.pagototal = this.pagototal + this.tablar3[i].po2c1
      this.pagototal = this.pagototal + this.tablar3[i].pec2
      this.pagototal = this.pagototal + this.tablar3[i].po1c2
      this.pagototal = this.pagototal + this.tablar3[i].po2c2
      this.pagototal = this.pagototal + this.tablar3[i].pec3
      this.pagototal = this.pagototal + this.tablar3[i].po1c3
      this.pagototal = this.pagototal + this.tablar3[i].po2c3
      this.pagototal = this.pagototal + this.tablar3[i].eec1
      this.pagototal = this.pagototal + this.tablar3[i].eo1c1
      this.pagototal = this.pagototal + this.tablar3[i].eo2c1
      this.pagototal = this.pagototal + this.tablar3[i].eec2
      this.pagototal = this.pagototal + this.tablar3[i].eo1c2
      this.pagototal = this.pagototal + this.tablar3[i].eo2c2
      this.pagototal = this.pagototal + this.tablar3[i].eec3
      this.pagototal = this.pagototal + this.tablar3[i].eo1c3
      this.pagototal = this.pagototal + this.tablar3[i].eo2c3
    }
  }

  // pec1:0,
  // po1c1:0,
  // po2c1:0,
  // pec2:0,
  // po1c2:0,
  // po2c2:0,
  // pec3:0,
  // po1c3:0,
  // po2c3:0,

  // eec1:0,
  // eo1c1:0,
  // eo2c1:0,
  // eec2:0,
  // eo1c2:0,
  // eo2c2:0,
  // eec3:0,
  // eo1c3:0,
  // eo2c3:0

  calculartotal(){
    this.r1A = 0;
    this.r1B = 0;
    this.r1C = 0;
    for (let i = 0; i < this.tablar1.length; i++) {
        if (this.tablar1[i].tipo == "A") {
          this.r1A = this.r1A + this.tablar1[i].camiones;
        }
        if (this.tablar1[i].tipo == "B") {
          this.r1B = this.r1B + this.tablar1[i].camiones;
        }
        if (this.tablar1[i].tipo == "C") {
          this.r1C = this.r1C + this.tablar1[i].camiones;
        }
    }
  }

  cuadradomedio(xn:number){
    let xn2 = "";
    let yn;
    let yn2;
    this.errorcm = false;
    // 492,613,736,617,391,823,264,999,13 no da cero pero se repite

    for (let i = 0; i <= 35; i++) {
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

    for (let i = 0; i <= 35; i++) {
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

    for (let i = 0; i <= 35; i++) {
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

    for (let i = 0; i < 35; i++) {
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

    for (let i = 0; i < 35; i++) {
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