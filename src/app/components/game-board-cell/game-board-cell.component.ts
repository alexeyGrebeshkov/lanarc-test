import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CLASS_NAME } from '../game-board/game-board.component';

@Component({
  selector: 'game-board-cell',
  templateUrl: './game-board-cell.component.html',
  styleUrls: ['./game-board-cell.component.css']
})
export class GameBoardCellComponent implements OnInit {

  private hiddenValue = '#';
  private _toggledValue = this.hiddenValue;

  @Input()
  value: number;

  @Output()
  cellHasBeenClicked = new EventEmitter();

  constructor(public elementRef: ElementRef) { }

  toggleValue(): void {
    this._toggledValue = this._toggledValue === this.hiddenValue ? String(this.value) : this.hiddenValue;
    this.cellHasBeenClicked.emit(this.toggledValue);
  }

  ngOnInit() {
  }

  get toggledValue(): string {
    return this._toggledValue;
  }
}
