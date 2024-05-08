import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel,IonContent, IonHeader, IonTitle, IonToolbar,IonCard,IonCardContent,IonCardHeader , IonButton,IonIcon,IonFooter,IonButtons,IonMenuButton } from '@ionic/angular/standalone';
import{TabPage} from '../tab/tab.page'
import { Router } from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
import { ModalController } from '@ionic/angular';
import { SellerDetailsModalPage } from '../seller-details.modal/seller-details.modal.page';
@Component({
  selector: 'app-listseller',
  templateUrl: './listseller.page.html',
  styleUrls: ['./listseller.page.scss'],
  standalone: true,
  imports: [IonLabel,IonContent,TabPage, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCard,IonCardContent,IonCardHeader,IonIcon,IonButton,IonFooter,IonButtons,IonMenuButton]
})
export class ListsellerPage implements OnInit {
  loggedInSellers!: any[] ;
  constructor(private modalController: ModalController,private sellerService: SellerService,private router:Router) { }

  ngOnInit() {
    this.loadLoggedInSellers();
  }

  loadLoggedInSellers() {
    this.sellerService.getLoggedInSellers().subscribe(
      (data) => {
        this.loggedInSellers = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des vendeurs connectés :', error);
      }
    );
  }

  onNavigate(page: any){
    this.router.navigate([page]);
    }

    deleteSeller(seller: any) {
      this.sellerService.deleteSeller(seller.username).subscribe(
        (data) => {
          console.log('Vendeur supprimé avec succès');
          // Recharger la liste des vendeurs après la suppression
          this. loadLoggedInSellers();
        },
        (error) => {
          console.error('Erreur lors de la suppression du vendeur :', error);
        }
      );
    }
    async openSellerDetailsModal(seller: any) {
      const modal = await this.modalController.create({
        component: SellerDetailsModalPage,
        componentProps: {
          seller: seller
        }
      });
      return await modal.present();
    }
  
  }


