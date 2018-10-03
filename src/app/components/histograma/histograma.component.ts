import { Component, OnInit } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service'

@Component({
  selector: 'app-histograma',
  templateUrl: './histograma.component.html',
  styles: []
})
export class HistogramaComponent implements OnInit {
  // gc0 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc1 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc2 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc3 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc4 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc5 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc6 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];
  // gc7 = [65, 59, 80, 81, 56, 55, 40, 55, 40, 55, 40, 55, 40];

  constructor( public rs:ResultadoService ) {
    console.log(this.rs.r1C);
  }

  ngOnInit() {
    this.loadScripts();
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Periodo de simulacion'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [this.rs.r1A], label: 'Camiones tipo A'},
    {data: [this.rs.r1B], label: 'Camiones tipo B'},
    {data: [this.rs.r1C], label: 'Camiones tipo C'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  loadScripts() {
    const dynamicScripts = [
      'assets/libs/jquery/js/jquery.slim.min.js',
      'assets/libs/popper/js/popper.js',
      'assets/libs/chartjs/Chart.bundle.min.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
