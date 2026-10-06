import { Component } from '@angular/core';
import { Navbar } from '../../core/layout/navbar/navbar';
import { Footer } from '../../core/layout/footer/footer';
import { HeroSection } from './hero-section/hero-section';


@Component({
  imports: [Navbar, Footer, HeroSection],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home { }
