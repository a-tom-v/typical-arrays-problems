
exports.min = function min (array) {
  let minResult = Math.min.apply(null, array);
  if(!array || array.length === 0){
    return 0;
  } else {
    return minResult;
  }
};
exports.max = function max (array) {
  let maxResult = Math.max.apply(null, array);
  if(!array || array.length === 0){
  return 0;
} else {
  return maxResult;
}
};

exports.avg = function avg (array) {
  if(!array || array.length === 0){
    return 0;
  } else {
    let sumResult = array.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    let avgResult = sumResult / array.length;
    return avgResult;
  }
};
