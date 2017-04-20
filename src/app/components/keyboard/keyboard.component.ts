import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

	@Input() guess_list;
	top = ['q','w','e','r','t','y','u','i','o','p'];
	middle = ['a','s','d','f','g','h','j','k','l'];
	bottom = ['z','x','c','v','b','n','m'];
  constructor() { }

  ngOnInit() {
  }


  class_of(ch) {
  	if (this.guess_list.indexOf(ch) > 0){
  		return "guessed";
  	}else{
  		return "remaining";
  	}
  }

}
