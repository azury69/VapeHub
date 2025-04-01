import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewArrivalsComponent } from "../new-arrivals/new-arrivals.component";

@Component({
  selector: 'app-hero-page',
  imports: [NgFor, NgClass, NewArrivalsComponent],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit,OnDestroy{
  images = [
    { src: 'pexels-dima-valkov-1186343-2730576.jpg' },
    { src: 'wallpaperflare.com_wallpaper (1).jpg' },
    { src: 'wallpaperflare.com_wallpaper.jpg' }
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlider();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Cleanup the interval when the component is destroyed
    }
  }

  startSlider(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change image every 5 seconds
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.startSlider(); // Restart the slider interval after manually clicking
    }
  }
}
