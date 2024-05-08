import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonLabel,IonInput,IonButton,IonText,IonIcon,IonSelect,IonSelectOption } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel,IonInput,IonButton,IonText,IonIcon,ReactiveFormsModule,IonSelect,IonSelectOption]
})
export class SignUpPage implements OnInit {

  form: FormGroup;
  type = false;
  alertMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.form = this.fb.group({
      username: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}), // added email validator also
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      role: new FormControl(null, {validators: [Validators.required]})
    });
}
ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  onSubmit() {
    const user = this.form.value;
    this.authService.register(user).subscribe(
      (response) => {
        console.log('Utilisateur enregistré avec succès', response);
        this.alertMessage = 'Inscription réussie. Vous pouvez vous connecter.';
        this.form.reset();
        // Gérer la réponse, rediriger l'utilisateur, etc.
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement', error);
        this.alertMessage = 'Erreur lors de l\'enregistrement. Veuillez réessayer!';
        // Gérer l'erreur
      }
    );
  }

}