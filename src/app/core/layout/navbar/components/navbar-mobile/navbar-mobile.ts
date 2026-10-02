import { Component, output, ElementRef, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideX } from '@lucide/angular';
import gsap from 'gsap';

@Component({
  imports: [LucideX, RouterLink],
  selector: 'app-navbar-mobile',
  styleUrl: './navbar-mobile.css',
  templateUrl: './navbar-mobile.html',
})
export class NavbarMobile {

  menuRef = viewChild<ElementRef>('menu');

  closeMenu = output<void>()

  ngOnInit() {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(this.menuRef()?.nativeElement,
      { x: '100%' },
      { x: '0%', duration: 0.3 }
    );
  }

  onClose() {
    gsap.to(this.menuRef()?.nativeElement, {
      x: '100%',
      duration: 0.3,
      onComplete: () => {
        document.body.style.overflow = '';
        this.closeMenu.emit()
      }
    });
  }

  linkCollection = [
    {
      id: "0",
      name: "Perfil",
      tag: "Tu espacio",
      description: "Pedidos, aromas favoritos y recompensas exclusivas.",
      route: "/login",
      image: "/img/core/vela.webp"
    },
    {
      id: "1",
      name: "Colecciones",
      tag: "Catálogo",
      description: "Aromas para cada momento y temporada.",
      route: "/collections",
      image: "/img/core/halloween.webp"
    },
    {
      id: "2",
      name: "Personaliza",
      tag: "Crea tu vela",
      description: "Diseña tu pedido a tu gusto y estilo.",
      route: "/custom",
      image: "/img/core/editor.webp"
    },
    {
      id: "3",
      name: "Ayuda",
      tag: "Centro de atención",
      description: "Resolvemos todas tus dudas al instante.",
      route: "/agent",
      image: "/img/core/auxiliar.webp"
    },
  ]

}
