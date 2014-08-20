'use strict';

describe('Service: minesweeperGame', function () {

  // load the service's module
  beforeEach(function () {
    module('angularMinesweeperAppInternal');
    //add your mocks here
  });

  // instantiate service
  var MinesweeperGame;
  beforeEach(inject(function (_MinesweeperGame_) {
    MinesweeperGame = _MinesweeperGame_;
  }));

  it('should have a board', function () {
    var mineSweeperGame = new MinesweeperGame();
    expect(mineSweeperGame.board).toBeDefined();
  });

  it('should have a board with 10 rows', function () {
    var mineSweeperGame = new MinesweeperGame(10);
    expect(mineSweeperGame.board.length).toBe(10);
  });

  it('should have a board with 20 columns', function () {
    var mineSweeperGame = new MinesweeperGame(1, 20);
    expect(mineSweeperGame.board[0].length).toBe(20);
  });

  it('should have a board with 5 mines', function () {
    var rows = 1;
    var columns = 20;
    var mines = 5;
    var mineSweeperGame = new MinesweeperGame(rows, columns, mines);

    var minesCounter = 0;
    _(rows).times(function (row) {
      _(columns).times(function (column) {
        if (mineSweeperGame.board[row][column].mine) {
          minesCounter++;
        }
      });
    });

    expect(mines).toBe(minesCounter);
  });

});
