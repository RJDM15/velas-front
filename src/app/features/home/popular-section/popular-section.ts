import { Component } from '@angular/core';
import { LucideChevronRight, LucideChevronLeft } from '@lucide/angular';

@Component({
  imports: [LucideChevronRight, LucideChevronLeft],
  selector: 'app-popular-section',
  styleUrl: './popular-section.css',
  templateUrl: './popular-section.html',
})
export class PopularSection { }
