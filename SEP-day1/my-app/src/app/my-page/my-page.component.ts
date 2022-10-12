import { Component, OnInit } from '@angular/core';

type theme = 'blue' | 'black' | 'red' | 'green'

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent implements OnInit {
  cards: Card[] = [new Card('blue'), new Card('black'), new Card('red'), new Card('green')]
  currentTheme: theme
  init: boolean

  constructor() {
    this.currentTheme = 'black'
    this.init = true
  }

  ngOnInit(): void {
  }

  changeTheme(color: theme) {
    this.currentTheme = color
    if (this.init) {
      this.init = false
    }
  }

}

class Card {
  title: string = 'This is Some Dummy Title'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  constructor(public color: theme) {
  }
}