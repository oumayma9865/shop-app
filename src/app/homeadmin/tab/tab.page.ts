import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel, CommonModule, FormsModule]
})
export class TabPage implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onNavigate(page: any){
    this.router.navigate([page]);
}
}
