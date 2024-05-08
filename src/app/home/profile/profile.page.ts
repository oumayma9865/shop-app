import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonLabel,IonCol,IonText,IonIcon,IonItem,IonMenuButton,IonRow,IonGrid,IonList,IonBackButton,IonAvatar,IonButton,IonFooter,IonTabs,IonTabBar,IonTabButton  } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { TabPage } from '../tab/tab.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent,TabPage, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonButton,IonCol,IonLabel,IonText,IonIcon,IonItem,IonList,IonAvatar,IonMenuButton,IonRow,IonGrid,IonBackButton,IonFooter,IonTabs,IonTabBar,IonTabButton]
})
export class ProfilePage implements OnInit {

 
  back!: boolean;

  constructor(public router: Router) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }

}