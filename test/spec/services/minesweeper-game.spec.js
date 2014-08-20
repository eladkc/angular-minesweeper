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

});
