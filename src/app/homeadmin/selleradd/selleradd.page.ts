import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonRow,IonCol,IonList,IonCard,IonCardHeader,IonCardContent,IonButtons,IonButton,IonIcon, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-selleradd',
  templateUrl: './selleradd.page.html',
  styleUrls: ['./selleradd.page.scss'],
  standalone: true,
  imports: [IonRow,IonCol,IonList,IonCard,IonCardHeader,IonCardContent,IonButtons,IonButton,IonContent,IonIcon, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SelleraddPage implements OnInit {
  sellers: any[] = [];

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers(): void {
    this.sellerService.getSellers().subscribe(
      sellers => {
        this.sellers = sellers;
      },
      error => {
        console.error('Erreur lors de la récupération des vendeurs :', error);
      }
    );
  }
  acceptSeller(username: string) {
    this.sellerService.acceptSeller(username).subscribe(
      (data) => {
        console.log('Vendeur accepté avec succès');
        // Recharger la liste des vendeurs après l'acceptation
        this.getSellers();
      },
      (error) => {
        console.error('Erreur lors de l\'acceptation du vendeur :', error);
      }
    );
  }

  rejectSeller(username: string) {
    this.sellerService.rejectSeller(username).subscribe(
      (data) => {
        console.log('Vendeur rejeté avec succès');
        // Recharger la liste des vendeurs après le rejet
        this.getSellers();
      },
      (error) => {
        console.error('Erreur lors du rejet du vendeur :', error);
      }
    );
  }
}