// input: [2, 4, 6]
// Process: (4 * 6) (2 * 6) (2 * 4)
// output: [24, 12, 8]

function perkalianUnik(arr) {
  var result = [];

  var i = 0;
  var notI = 0;
  var calculate = 1; // 1 * 4 = 4 * 6 = 24

  // Nyari output indeks ke 0 dulu, yaitu 24
  // while(i < arr.length) {
  //
  //   if(arr[i] === arr[notI]) { continue; }
  //
  //   calculate *= arr[i];
  //   i++;
  // }
  // return calculate;

  for(i; i < arr.length; i++) {
    if(arr[i] === arr[notI]) {continue;}
    calculate *= arr[i];
  }

  result.push(calculate);
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
