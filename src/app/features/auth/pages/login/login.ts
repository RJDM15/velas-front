import { Component, signal } from '@angular/core';
import { NavbarMobile } from '../../../../core/layout/navbar-mobile/navbar-mobile';
import { Footer } from '../../../../core/layout/footer/footer';
import { LucideMail, LucideEye, LucideEyeOff, LucideFlame } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NavbarMobile, LucideMail, LucideEye, LucideEyeOff, LucideFlame, Footer, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  showPassword = signal(false)

  changeVisibility() {
    this.showPassword.update(x => !x)
  }
}
