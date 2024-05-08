import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonApp, IonRouterOutlet,IonLabel,IonText,IonIcon,IonItem,IonList,IonAvatar,IonMenu,IonSplitPane,IonFooter,IonMenuToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close,checkmark,add,person,logOut,trash,list,cart,calendar,settings,key,cash,wallet, bagHandle, bagHandleOutline, remove,card, star, trashOutline,logoFacebook,logoTwitter, logoGoogle,home, addCircle} from 'ionicons/icons';
import { Router, RouterLink } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [HttpClientModule,RouterLink,IonContent, IonHeader, IonTitle, IonToolbar,IonApp, IonRouterOutlet,IonLabel,IonText,IonIcon,IonItem,IonList,IonAvatar,IonMenu,IonSplitPane,IonFooter,IonMenuToggle,IonRouterOutlet ],
})
export class AppComponent {
 
  constructor(private menuCtrl: MenuController, private router:Router) {
    addIcons({
      star,
      'logo-facebook': logoFacebook,
      'logo-twitter': logoTwitter,
      'logo-google': logoGoogle,
      'add-circle':addCircle,
      person,
      checkmark,
      close,
      settings,
      home,
      trash,
      card,
      cart,
      list,
      calendar,
      key,
      cash,wallet,
      'log-out-outline':logOut,
      bagHandleOutline,
      bagHandle,
      trashOutline,
      add,
      remove
    });
  }
  ngOnInit(): void {
  
  }
  
  signOut() {
    console.log('signout');
  }

  onNavigate(page: any){
     this.router.navigate([page]);
      this.menuCtrl.close(); 
  } 
}