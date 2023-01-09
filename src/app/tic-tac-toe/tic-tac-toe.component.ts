import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  player: string = 'X';
  winner!: string;

  constructor() { }

  mark(row: number, col: number): void {
    if (!this.winner && this.board[row][col] === '') {
      this.board[row][col] = this.player;
      this.winner = this.getWinner();
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  getWinner(): string {
    const lines = [      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
    for (const line of lines) {
      if (this.board[line[0][0]][line[0][1]] === this.player
        && this.board[line[1][0]][line[1][1]] === this.player
        && this.board[line[2][0]][line[2][1]] === this.player) {
        return this.player;
      }
    }
    return '';
  }

  newGame(): void {
    this.board = [      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.player = 'X';
    this.winner = '';
  }
}

