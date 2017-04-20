import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

@Input() guess_list;
@Input() word;
showword;

  constructor() { }

  ngOnInit() {
  	console.log(this.word,this.guess_list);
  	this.showword = this.word;
  	let comp = this;
  	this.guess_list.forEach(function(ch){
  		while(comp.showword.includes(ch)){
  			comp.showword = comp.showword.replace(ch, '_');
  		}
  	});

  }

}
