function targetTerdekat(arr) {

  var checkX = false;
  var searchO;
  var searchX;
  var searchSpace = 0;

  // Firstly, check value of array, if 'X' not found return 0
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === 'x') {
      checkX = true;
    }
  }
  if(!checkX) {
    return 0;
  }

  // If array first index is 'x'
  if(arr[0] === 'x') {
    for(var i = 0; i < arr.length; i++) {

      if(arr[i] === 'o') {
        searchO = i;

        for(var j = searchO; j < arr.length; j++) {
          if(arr[j] === ' ') {
            searchSpace++;
          } else if(arr[j] === 'x') {
            return searchSpace;
          }
        }
        break;
      }

    }
    return searchSpace;
  }

  // Found range of o to x
  for(var i = 0; i < arr.length; i++) {

    if(arr[i] === 'o') {
      searchO = i;

      for(var j = searchO; j < arr.length; j++) {
        if(arr[j] === 'x') {
          searchX = j;
          break;
        }
      }

      break;
    }
  }

  var result = searchX - searchO;
  return result;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
