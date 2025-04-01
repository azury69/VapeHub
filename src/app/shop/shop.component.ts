import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [NgFor],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  categories = [
    { name: 'Vape', imageUrl: 'vape.jpg', link: '#' },
    { name: 'Hookah', imageUrl: 'hookah.jpg', link: '#' },
    { name: 'Disposables', imageUrl: 'Untitled_15.jpg', link: '#' },
    { name: 'Devices', imageUrl: 'hookah.jpg', link: '#' },
    { name: 'Coils', imageUrl: 'Vape_Coils.jpg', link: '#' }
  ];
}
