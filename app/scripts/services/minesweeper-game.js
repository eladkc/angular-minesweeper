'use strict';

(function () {

    /* @ngInject */
    function MinesweeperGameFactory() {
        function MinesweeperGame(rows) {
            this.board = [rows];
        }
        return MinesweeperGame;
    }

    angular
        .module('angularMinesweeperAppInternal')
        .factory('MinesweeperGame', MinesweeperGameFactory);
})();
