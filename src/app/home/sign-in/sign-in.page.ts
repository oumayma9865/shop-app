import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonLabel,IonInput,IonButton,IonText,IonIcon,IonItem } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel,IonInput,IonButton,IonText,IonIcon,ReactiveFormsModule]
})
export class SignInPage implements OnInit {

form!: FormGroup;
  type = true;

  constructor(private router: Router,private authService: AuthService) { 
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const { email, password } = this.form.value;
    this.authService.login(email, password).subscribe(() => {
      const userType = this.authService.getUserType();
      switch (userType) {
        case 'admin':
          this.router.navigate(['/dashboard']);
          break;
        case 'vendeur':
          this.router.navigate(['/homeseller']);
          break;
        case 'client':
          this.router.navigate(['/home']);
          break;
        default:
          // Gérer d'autres cas si nécessaire
          break;
      }
    }, (error) => {
      console.error('Erreur de connexion : ', error);
      // Gérer les erreurs de connexion
    });
  }
}

