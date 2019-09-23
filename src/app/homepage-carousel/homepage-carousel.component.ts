import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-carousel',
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.scss']
})
export class HomepageCarouselComponent implements OnInit {
  images = [
    `http://aguidetoanaheim.com/wp-content/uploads/2014/09/Anaheim-Shopping-Near-Disneyland-e1410736366369.jpg`,
    `https://www.france-hotel-guide.com/en/blog/wp-content/uploads/2017/02/paris-shopping.jpg`,
    `https://img.freepik.com/free-photo/colorful-paper-bags-shopping_23-2147652053.jpg?size=626&ext=jpg`
  ];

  constructor() {}

  ngOnInit() {}
}
