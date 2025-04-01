import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuVisible: boolean = false;
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
