import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonFooter,IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonFooter,IonButton, CommonModule, FormsModule]
})
export class ConfirmPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.router.navigate(['/home']);
    }
}
