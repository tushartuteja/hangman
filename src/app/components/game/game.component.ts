import { Component, OnInit } from '@angular/core';
import {WORDS} from '../../constants/words';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  guesses;
  words = WORDS;
  word;
  guess_list;
  showword;
  ch = "";
  showGame = false;
  constructor() { }

  ngOnInit() {
     this.startGame();
  }


  startGame(){
    this.showGame=false;
    this.guess_list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    this.guesses = 6;
    this.word = this.words[Math.floor(Math.random()*this.words.length)];
    this.showGame = true;
    if(!environment.production){
          console.log(this.word);
    }
    this.showwordEval();


  }

  guessed(){
    this.startGame();
    alert("You won");

  }

  guess(event){
    this.guess_char(event.char);
  }

  guess_char(ch){
     let i  = this.guess_list.indexOf(ch);
        if(i != -1){
        let left = this.guess_list.slice(0,i);
        let right = this.guess_list.slice(i+1,this.guess_list.length);
        this.guess_list = left.concat(right);

        if(this.word.indexOf(ch) == -1 ){
            this.guesses = this.guesses - 1;
            if (this.guesses == 0){
              alert("Game Over, Word was: " + this.word);
              this.startGame();

            }
        }
        }


   
        this.showwordEval();
  
  }


  showwordEval(){
    this.showword = this.word;
    let comp = this;
    this.guess_list.forEach(function(ch){
      while(comp.showword.includes(ch)){
        comp.showword = comp.showword.replace(ch, '_');
      }
    });

    if(this.showword === this.word){
      this.guessed();
    }
  }
  submit(){
  	if(this.ch.length > 1){
    }
    else{
      if (this.ch.length == 1){
       this.guess_char(this.ch);
      }
    }
    this.ch = "";
  }

}
