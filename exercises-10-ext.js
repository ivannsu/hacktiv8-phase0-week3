function perkalianUnik(arr) {
  var result = [];
  var counter = 0;
  var notI = 0;

  while(counter < arr.length) {
    var calculate = 1;

    for(var i = 0; i < arr.length; i++) {

      if(i !== notI) {
        calculate *= arr[i];
      }
    }
    result.push(calculate);
    notI++;
    counter++;
  }
  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
