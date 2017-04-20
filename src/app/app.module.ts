import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { WordComponent } from './components/word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HangmanComponent,
    KeyboardComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
