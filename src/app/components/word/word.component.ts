import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit, OnChanges {

// @Input() guess_list;
// @Input() word;
@Input() showword;
// @Output() guessed = new EventEmitter();


  constructor() { }

  ngOnInit() {
  	// this.showword = this.word;
  	// let comp = this;
  	// this.guess_list.forEach(function(ch){
  	// 	while(comp.showword.includes(ch)){
  	// 		comp.showword = comp.showword.replace(ch, '_');
  	// 	}
  	// });

  }

  ngOnChanges(){
    // this.showword = this.word;
    // let comp = this;
    // this.guess_list.forEach(function(ch){
    //   while(comp.showword.includes(ch)){
    //     comp.showword = comp.showword.replace(ch, '_');
    //   }
    // });

    // if(this.showword === this.word){
    //   this.guessed.emit();
    // }

  }

}
