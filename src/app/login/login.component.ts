import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from '../splash-screen/splash-screen.component';
import { SplashScreen } from '@capacitor/splash-screen';
import { CapacitorConfig } from '@capacitor/cli';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, ReactiveFormsModule, CommonModule],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

  async login() {
    console.log(this.form);

    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }
}
