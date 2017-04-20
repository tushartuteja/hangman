import { Component, OnInit } from '@angular/core';
import {WORDS} from '../../constants/words';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  guesses = 6;
  words = WORDS;
  word = this.words[Math.floor(Math.random()*this.words.length)];
  guess_list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];

  constructor() { }

  ngOnInit() {
this.startGame();
  
  }


  startGame(){

  this.guesses = 6;
  this.words = WORDS;
  this.word = this.words[Math.floor(Math.random()*this.words.length)];
  this.guess_list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }

}
