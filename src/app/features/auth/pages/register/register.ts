import { Component } from '@angular/core';
import { NavbarMobile } from '../../../../core/layout/navbar-mobile/navbar-mobile';
import { Footer } from '../../../../core/layout/footer/footer';
import { LucideMail, LucideKey, LucidePhone, LucideUserRoundPlus } from '@lucide/angular';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NavbarMobile, Footer, LucideMail, LucideKey, LucidePhone, LucideUserRoundPlus, RouterLink],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register { }
