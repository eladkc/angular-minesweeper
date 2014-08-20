'use strict';

describe('Service: minesPlanter', function () {

  // load the service's module
  beforeEach(function () {
    module('angularMinesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var minesPlanter;
  beforeEach(inject(function (_minesPlanter_) {
    minesPlanter = _minesPlanter_;
  }));

  it('should do something', function () {
    expect(minesPlanter.someMethod()).toBe(42);
  });

});
