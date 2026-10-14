import { Component } from '@angular/core';
import { Navbar } from '../../core/layout/navbar/navbar';
import { Footer } from '../../core/layout/footer/footer';
import { HeroSection } from './hero-section/hero-section';
import { PopularSection } from './popular-section/popular-section';
import { VisibilitySection } from './visibility-section/visibility-section';


@Component({
  imports: [Navbar, Footer, HeroSection, PopularSection, VisibilitySection],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home { }
