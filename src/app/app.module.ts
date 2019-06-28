import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameBoardCellComponent } from './components/game-board-cell/game-board-cell.component';

import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameBoardCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
