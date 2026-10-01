import { Component, signal } from '@angular/core';
import { LucideMenu, LucideShoppingBag } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { NavbarMobile } from './components/navbar-mobile/navbar-mobile';

@Component({
  imports: [LucideMenu, LucideShoppingBag, RouterLink, NavbarMobile],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  isOpen = signal<Boolean>(false)

  handleOpenMenu() {
    this.isOpen.update(x => !x);
  }

}
