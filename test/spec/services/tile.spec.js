'use strict';

describe('Service: tile', function () {

  // load the service's module
  beforeEach(function () {
    module('angularMinesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var Tile;
  beforeEach(inject(function (_Tile_) {
    Tile = _Tile_;
  }));

  it('should be defined correctly', function () {
    var tile = new Tile();
    expect(tile.mine).toBeDefined();
    expect(tile.mine).toBe(false);
    expect(tile.number).toBeDefined();
    expect(tile.number).toBe(0);
    expect(tile.flaged).toBeDefined();
    expect(tile.flaged).toBe(false);
  });

});
