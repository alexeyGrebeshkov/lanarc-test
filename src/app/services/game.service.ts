import { Injectable } from '@angular/core';

const enum RANGE {
  MIN = 1,
  MAX = 899
}

const getRandom = (): number => Math.floor(Math.random() * (RANGE.MAX - RANGE.MIN)) + RANGE.MIN;

const getArrayOfRandomNumbers = (length: number): number[] => {
  if ((length / 2) > (RANGE.MIN + RANGE.MAX)) {
    throw new Error(`The board size could not exceed current range from ${ RANGE.MIN } to ${ RANGE.MAX }.
      Try either to increase range or decrease board size`);
  }

  const arr: number[] = [];
  let randomNumber = 0;

  for (let i = 0; i < length / 2; i++) {

    do {
      randomNumber = getRandom();
    } while (arr.includes(randomNumber));

    arr.push(randomNumber, randomNumber);
  }

  return arr;
};

const shuffleArray = (arr: number[]): void => {
  for (let i = arr.length - 1; i; i--) {
    const j = Math.floor(Math.random() * i);

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

const getMatrix = (arr: number[], width = 30, height = 30): number[][] => {
  if (arr.length !== width * height) {
    throw new Error(`Can't create a matrix based on current width of ${ width } and height of ${ height }.`);
  }

  const matr: number[][] = [];
  let i = 0;

  while (height--) {
    const row: number[] = [];
    let j = width;

    while (j--) {
      row.push(arr[i++]);
    }

    matr.push(row);
  }

  return matr;
};

@Injectable()
export class GameService {
  readonly height: number = 30;
  readonly width: number = 30;
  readonly gameModel: number[][];

  constructor() {
    const arr: number[] = getArrayOfRandomNumbers(this.height * this.width);

    shuffleArray(arr);

    this.gameModel = getMatrix(arr);
  }
}
