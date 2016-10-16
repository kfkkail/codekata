exports.chop1 = function(int, array) {

  var chopped = array.indexOf(int);

  return chopped;

};

exports.chop = function(int, array) {

  var chopped = -1;

  for(i = 0; i<array.length; i++) {
    if (array[i] === int) {
      chopped = i;
      break;
    }
  }

  return chopped;
};
