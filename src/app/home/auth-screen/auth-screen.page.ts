import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonLabel,IonSegmentButton,IonSegment,IonList } from '@ionic/angular/standalone';
import { SignInPage } from '../sign-in/sign-in.page';
import { SignUpPage } from '../sign-up/sign-up.page';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-auth-screen',
  templateUrl: './auth-screen.page.html',
  styleUrls: ['./auth-screen.page.scss'],
  standalone: true,
  imports: [HttpClientModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonLabel,IonSegmentButton,IonSegment,IonList,SignInPage,SignUpPage]
})
export class AuthScreenPage implements OnInit {

  segmentValue = '1';

  constructor() { }

  ngOnInit() {
  }
 
  segmentChanged(event:any) {
    console.log(event);
    this.segmentValue = event.detail.value;
  }

}