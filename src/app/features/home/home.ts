import { Component } from '@angular/core';
import { Navbar } from '../../core/layout/navbar/navbar';
import { Footer } from '../../core/layout/footer/footer';


@Component({
  imports: [Navbar, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home { }
