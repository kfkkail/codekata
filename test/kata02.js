var test = require('unit.js');
var chop = require('../app/chop.js')

describe("Kata02", function() {
  describe("Binary", function() {
    it("Chop the bits! Array Size 1", function() {
      test.value(chop.chop(3,[])).isEqualTo(-1);
      test.value(chop.chop(3,[1])).isEqualTo(-1);
      test.value(chop.chop(1,[1])).isEqualTo(0);
    });

    it("Chop the bits! Array Size 3", function() {
      test.assert(0 === chop.chop(1, [1, 3, 5]));
      test.assert(1 === chop.chop(3, [1, 3, 5]));
      test.assert(2 === chop.chop(5, [1, 3, 5]));
      test.assert(-1 === chop.chop(0, [1, 3, 5]));
      test.assert(-1 === chop.chop(2, [1, 3, 5]));
      test.assert(-1 === chop.chop(4, [1, 3, 5]));
      test.assert(-1 === chop.chop(6, [1, 3, 5]));
    });

    it("Chop the bits! Array Size 4", function() {
      test.assert(0 === chop.chop(1, [1, 3, 5, 7]));
      test.assert(1 === chop.chop(3, [1, 3, 5, 7]));
      test.assert(2 === chop.chop(5, [1, 3, 5, 7]));
      test.assert(3 === chop.chop(7, [1, 3, 5, 7]));
      test.assert(-1 === chop.chop(0, [1, 3, 5, 7]));
      test.assert(-1 === chop.chop(2, [1, 3, 5, 7]));
      test.assert(-1 === chop.chop(4, [1, 3, 5, 7]));
      test.assert(-1 === chop.chop(6, [1, 3, 5, 7]));
      test.assert(-1 === chop.chop(8, [1, 3, 5, 7]));
    });
  });
});
