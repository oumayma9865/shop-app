import { Component, HostListener } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardContent,IonCardHeader,IonFooter,IonIcon,IonButtons,IonMenuButton
} from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { LegendPosition } from '@swimlane/ngx-charts';
import { NgClass } from '@angular/common';
import { GroupedVerticalBarChartPage } from '../grouped-vertical-bar-chart/grouped-vertical-bar-chart.page';
import { PieChartPage } from '../pie-chart/pie-chart.page';
import{TabPage} from '../tab/tab.page';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonFooter,
    IonHeader,
    IonCardHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardTitle,
    IonCardContent,
    NgClass,
    GroupedVerticalBarChartPage,
    PieChartPage,
    TabPage
    
  ],
})
export class DashboardPage {
  view: any;
  legendPosition!: LegendPosition;
  below: boolean = false;

  constructor(private platform: Platform) {}

  ngOnInit() {
    // this.changeLegendPostion(false);
    this.handleScreenSizeChange();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenSizeChange();
  }

  changeLegendPostion(defaultValue = true) {
    this.legendPosition = defaultValue ? LegendPosition.Right : LegendPosition.Below;
    this.below = !defaultValue;
  }

  handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    console.log(width, height);
    if (width > height) {
      this.changeLegendPostion();
      this.view = [0.9 * width, 0.9 * height];
    } else {
      this.changeLegendPostion(false);
      this.view = [0.95 * width, 0.35 * height];
    }
  }
}
