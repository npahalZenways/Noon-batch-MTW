import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {
  title = 'Game selector';
  selectedGame;
  games = [{
    gameImgUrl: 'https://ichef.bbci.co.uk/images/ic/480x270/p05394v7.jpg',
    gameName: 'Football',
    players: [
      'Messi',
      'Ronaldino',
      'Ronaldo',
      'Pierre'
    ]
  },
  {
    gameImgUrl: 'http://s3.india.com/cricket/uploads/29a6d16f4595e80350e70faa565cf7f0.jpeg',
    gameName: 'Cricket',
    players: [
      'Sachin',
      'Sehwag',
      'Dravid',
      'Kohli'
    ]
  },
  {
    gameImgUrl: 'https://usatthebiglead.files.wordpress.com/2017/07/usatsi_9931962.jpg?w=1000&h=667',
    gameName: 'Basketball',
    players: [
      'Jordan',
      'Lonzo',
      'Steve',
      'Stephen'
    ]
  }]
  constructor(){
    console.log('constructor called')
  }
  ngOnInit(){
    console.log('onint called')
  }
}
