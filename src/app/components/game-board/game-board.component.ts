import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameBoardCellComponent } from '../game-board-cell/game-board-cell.component';

export const enum CLASS_NAME {
  CELL = 'cell',
  DISABLED = 'disabled',
  HIDDEN = 'hidden'
}

@Component({
  selector: "game-board",
  templateUrl: "./game-board.component.html",
  styleUrls: ["./game-board.component.css"]
})
export class GameBoardComponent implements OnInit {

  private previousCellValue = '';

  @ViewChildren(GameBoardCellComponent) viewChildren: QueryList<GameBoardCellComponent>;

  constructor(private gameService: GameService) { }

  private handleCellClick(currentCellValue: string): void {
    if (currentCellValue === '#') {
      return;
    }

    const arr = this.viewChildren.toArray();

    arr.forEach(el => {
      const currentElem = el.elementRef.nativeElement.querySelector('div');
      if (!currentElem.classList.contains(CLASS_NAME.DISABLED)) {
        currentElem.className = `${ CLASS_NAME.CELL } ${ CLASS_NAME.HIDDEN }`;
      }
    });

    const currentPair = arr.filter(el => String(el.value) === currentCellValue);

    if (currentPair[0].toggledValue === currentPair[1].toggledValue) {
      currentPair.forEach(el => el.elementRef.nativeElement.querySelector('div').classList.add(CLASS_NAME.DISABLED));
    } else {
      currentPair.forEach(el => {
        el.elementRef.nativeElement.querySelector('div').className = `${CLASS_NAME.CELL} ${CLASS_NAME.HIDDEN}`;
      });
    }
  }

  ngOnInit() {
  }
}
