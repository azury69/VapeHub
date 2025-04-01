import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  imports: [NgFor],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css'
})
export class NewArrivalsComponent {
  products = [
    {
      image: 'pexels-renz-macorol-1921287-3545426.jpg',
      title: 'Vape X Pro',
      price: 'NPR 4,500'
    },
    {
      image: 'pexels-nathansalt-2463125.jpg',
      title: 'Cloud Beast 3000',
      price: 'NPR 5,200'
    },
    {
      image: 'pexels-zachtheshoota-2930929.jpg',
      title: 'Storm Chaser Max',
      price: 'NPR 6,000'
    }
  ];
}
