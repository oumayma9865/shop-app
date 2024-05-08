import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon,IonButtons,IonButton,IonItem,IonList,IonLabel,IonText,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-seller-details.modal',
  templateUrl: './seller-details.modal.page.html',
  styleUrls: ['./seller-details.modal.page.scss'],
  standalone: true,
  imports: [IonIcon,IonButtons,IonButton,IonItem,IonList,IonLabel,IonText,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SellerDetailsModalPage implements OnInit {
  @Input() seller: any;

  constructor(private modalController: ModalController) {}
  ngOnInit(): void {
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}