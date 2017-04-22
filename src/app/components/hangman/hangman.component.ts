import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  @Input() guesses;
 @Input() word_length;
  constructor() { }

  ngOnInit() {
  }

}
