'use strict';

(function () {

  /* @ngInject */
  function MinesweeperGameFactory() {
    function MinesweeperGame(rows, columns) {
      var board = [];
      _(rows).times(function (row) {
        board.push([]);
        _(columns).times(function () {
          board[row].push({});
        });
      });
      this.board = board;
    }

    return MinesweeperGame;
  }

  angular
    .module('angularMinesweeperAppInternal')
    .factory('MinesweeperGame', MinesweeperGameFactory);
})();
