import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  // lineChart
  public lineChartData:Array<any> = [
    {data: [0, 0, 0, 0], label: 'Ventas'}
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril'];

  constructor(private http: HttpClient,
              private wsService: WebsocketService) { }

  ngOnInit() {
    this.escucharsocket();
    /*setInterval(()=>{
      const newData = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
      this.lineChartData = [
        {data: newData, label: 'Ventas'  }
      ];

    }, 3000);*/

  }

  getdata() {
    this.http.get('http://localhost:5000/grafica')  
    .subscribe((data: any ) => this.lineChartData = data );

  }
  escucharsocket() {
    this.wsService.listen('cambia-grafica')
    .subscribe((data: any) => {
      this.lineChartData = data;
        console.log(data);
    });
  }

}
