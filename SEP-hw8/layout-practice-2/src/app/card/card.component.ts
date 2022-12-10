import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Card
  @Input() curCard!: Card
  clicked: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
