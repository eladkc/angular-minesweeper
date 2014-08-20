'use strict';

(function () {

    /* @ngInject */
    function MinesweeperGameFactory() {
        function MinesweeperGame(rows) {
            this.board = [rows];
//            kc
        }
        return MinesweeperGame;
    }

    angular
        .module('angularMinesweeperAppInternal')
        .factory('MinesweeperGame', MinesweeperGameFactory);
})();
