function mengelompokkanAngka(arr) {

  var kelipatan3 = [];
  var genap = [];
  var ganjil = [];
  var result = [];

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {

      // kelipatan3
      kelipatan3.push(arr[i]);
    } else if(arr[i] % 2 === 0) {

      // Genap
      genap.push(arr[i]);
    } else if(arr[i] % 2 === 1) {

      // Ganjil
      ganjil.push(arr[i]);
    }
  }

  result.push(genap, ganjil, kelipatan3);
  return result;
}

// TEST CASES
// [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([2, 4, 6]));

// [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//
//  // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
//
//  // [ [], [], [] ]
console.log(mengelompokkanAngka([]));
