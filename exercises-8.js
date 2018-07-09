function pasanganTerbesar(num) {
  var numStr = num.toString();
  var i = 0;
  var numArray = [];

  while(i < numStr.length) {
    numArray.push(parseInt(numStr.substr(i, 2)));
    i++;
  }

  numArray.sort(function(val1, val2) {
    return val2 > val1;
  });

  return numArray[0];
}

// TEST CASE
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
