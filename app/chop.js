//20ms
//figure out quickest way to come up javascript way of solving
exports.chop1 = function(int, array) {

  var chopped = array.indexOf(int);

  return chopped;

};

//20ms
//start at the beginning of the array and work forwards
exports.chop2 = function(int, array) {

  var chopped = -1;

  for(i = 0; i<array.length; i++) {
    if (array[i] === int) {
      chopped = i;
      break;
    }
  }

  return chopped;
};

//20ms
//start at the end of the array and work backwards
exports.chop = function(int, array) {

  var chopped = -1;
  var index;

  for(i = 0; i<array.length; i++) {
    index = array.length-1-i;
    if (array[index] === int) {
      chopped = index;
      break;
    }
  }

  return chopped;
};
