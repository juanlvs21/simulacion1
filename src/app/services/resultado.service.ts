import { Injectable } from '@angular/core';

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
      ic:'000-079'
    },
    {
      kg:10000,
      fx: 0.110,
      fx2: 0.190,
      ic:'080-189'
    },
    {
      kg:15000,
      fx: 0.150	,
      fx2: 0.340,
      ic:'190-339'
    },
    {
      kg:20000,
      fx: 0.230,
      fx2: 0.570,
      ic:'340-569'
    },
    {
      kg:25000,
      fx: 0.200,
      fx2: 0.77,
      ic:'570-769'
    },
    {
      kg:30000,
      fx: 0.130,
      fx2:0.900,
      ic:'770-899'
    },
    {
      kg:35000,
      fx: 0.100,
      fx2: 1.000,
      ic:'900-999'
    }
  ]
  
  tablar1 = [
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    // ----- DIA ----- 
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
    {
      dia:0,
      camiones:0,
      rn: 0,
      tipo: "",
    },
  ]

  tablar2 = [
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ---------- CAMIONES ----------
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // ----- N -----
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
    // KG 
    {
      camiones: 0,
      n:0,
      tipo: "",
      kg: 0
    },
  ]

  letras = [];

  r1A:number = 0;
  r1B:number = 0;
  r1C:number = 0;

  constructor() {
    this.llenarTR1();
    this.cuadradomedio();
    // console.log(this.tablar2.length)
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

  llenarTR2(){
    let control = 1;
    let camiones = 0;
    let n = 1;

    for (let i = 0; i < this.tablar2.length; i++) {
      if (control == 1) {
        this.tablar2[i].kg = 5000;
        this.tablar2[i].n = control;
      }
      if (control == 2) {
        this.tablar2[i].kg = 10000;
        this.tablar2[i].n = control;
      }
      if (control == 3) {
        this.tablar2[i].kg = 15000;
        this.tablar2[i].n = control;
      }
      if (control == 4) {
        this.tablar2[i].kg = 20000;
        this.tablar2[i].n = control;
      }
      if (control == 5) {
        this.tablar2[i].kg = 25000;
        this.tablar2[i].n = control;
      }
      if (control == 6) {
        this.tablar2[i].kg = 30000;
        this.tablar2[i].n = control;
      }
      if (control == 7) {
        this.tablar2[i].kg = 35000;
        this.tablar2[i].n = control;
        control = 0;
      }

      this.tablar2[i].camiones = camiones;
      if (n == 7) {
        camiones++;
        n = 0;
      }
      if( camiones == 8){
        camiones = 0
      }
      n++;
      control++;
    }
    // console.log(this.tablar2)
  }

  generarTR1(){
    this.r1A = 0;
    this.r1B = 0;
    this.r1C = 0;
    let rn = 0;
    let tipo = 0;
    let n = 1;

    for (let i = 0; i < this.tablar1.length; i++) {
      this.tablar1[i].rn = Math.random();
      rn = (this.tablar1[i].rn)*1000;

      for (let j = 0; j < this.tabla2.length; j++) {
        if ((rn >= this.tabla2[j].ic1)&&(rn <= this.tabla2[j].ic2)) {
          this.tablar1[i].tipo = this.tabla2[j].tipo;
          
          if (this.tablar1[i].tipo == "A") {
            this.r1A = this.r1A + 1;
            this.letras[i] = "A";
          }
          if (this.tablar1[i].tipo == "B") {
            this.r1B = this.r1B + 1;
            this.letras[i] = "B";
          }
          if (this.tablar1[i].tipo == "C") {
            this.r1C = this.r1C + 1;
            this.letras[i] = "C";
          } 
        }
      }
    }
    for (let i = 0; i < this.tablar2.length; i++) {
      this.tablar2[i].tipo = this.letras[tipo];

      if(n == 7){
        tipo++;
        n = 0;
      }
      n++;
    }
    // console.log(this.letras);
    this.llenarTR2();
  }

  cuadradomedio(){
    let xn = 295;
    let yn = xn*xn;
    let yn2;
    
    for (let i = 0; i <= 10; i++) {
      console.log(xn);
      console.log(yn);
      yn2 = yn.toFixed().split("");
      if (yn2.length == 5) {
        xn = yn2[1]+yn2[2]+yn2[3];
      }
  
    }

  }
}