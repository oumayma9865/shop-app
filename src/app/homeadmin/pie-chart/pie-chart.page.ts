import { Component, Input, OnInit } from '@angular/core';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.page.html',
  styleUrls: ['./pie-chart.page.scss'],
  standalone: true,
  imports: [NgxChartsModule]
})
export class PieChartPage implements OnInit {
 // options
 gradient: boolean = true;
 showLegend: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;
 @Input() view: any;
 @Input() legendPosition = LegendPosition.Right;
 colorScheme: any = {
   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
 };
 single: any[] = [];

 constructor() { }

 ngOnInit() {
   this.single = [
     {
       "name": "Germany",
       "value": 8940000
     },
     {
       "name": "USA",
       "value": 5000000
     },
     {
       "name": "France",
       "value": 7200000
     },
       {
       "name": "UK",
       "value": 6200000
     }
   ];
 }

 onSelect(data: any): void {
   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
 }

 onActivate(data: any): void {
   console.log('Activate', JSON.parse(JSON.stringify(data)));
 }

 onDeactivate(data: any): void {
   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
 }

}