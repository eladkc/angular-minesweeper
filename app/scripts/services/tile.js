'use strict';

(function () {

  /* @ngInject */
  function TileFactory() {
    function Tile() {
      this.mine = false;
      this.number = 0;
      this.flaged = false;
    }

    return Tile;
  }

  angular
    .module('angularMinesweeperAppInternal')
    .factory('Tile', TileFactory);

})();
