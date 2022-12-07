import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout-pratice';
  today!: Date
  card_description!: string

  ngOnInit() {
    this.today = new Date()
    this.card_description = 'Angular is a development platform for building a single page application on mobile and desktop. It uses Typescript and HTML to build apps. The Angular itself is written in Typescript.'
  }
}
