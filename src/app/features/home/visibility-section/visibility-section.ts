import { Component, signal } from '@angular/core';
import { LucideDynamicIcon, LucideTruck, LucideLeaf, LucideLockKeyhole, LucideFlame, LucideHandshake } from '@lucide/angular';

@Component({
  imports: [LucideDynamicIcon, LucideHandshake],
  selector: 'app-visibility-section',
  styleUrl: './visibility-section.css',
  templateUrl: './visibility-section.html',
})
export class VisibilitySection {

  mostWanted = signal([{ id: 0, name: "One" }, { id: 1, name: "Two" }, { id: 2, name: "Three" }, { id: 3, name: "Four" }]);
  attributes = signal(
    [
      { id: 0, title: "Envío gratis", desc: "A partir de $899 MXN", icon: LucideTruck },
      { id: 1, title: "Cera 100% Soya", desc: "Vegetal & biodegradable", icon: LucideLeaf },
      { id: 2, title: "Pago Seguro", desc: "Cifrado SSL 256–bit", icon: LucideLockKeyhole },
      { id: 3, title: "+55 Horas", desc: "Quemado lento & puro", icon: LucideFlame }
    ]
  )
}
