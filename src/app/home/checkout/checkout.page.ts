import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonItem,IonLabel,IonInput,IonButton ,IonIcon} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonCardContent,IonCardHeader,IonCardTitle,IonItem,IonLabel,IonInput,IonButton,IonIcon]
})
export class CheckoutPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
  this.router.navigate(['/confirm']);
  }
}
