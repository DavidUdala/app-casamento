import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [{
    src: `https://picsum.photos/id/${944}/900/500`,
    alt: `foto 1`
  },
  {
    src: `https://picsum.photos/id/${1011}/900/500`,
    alt: `foto 2`
  },
  {
    src: `https://picsum.photos/id/${984}/900/500`,
    alt: `foto 3`
  }];
}
