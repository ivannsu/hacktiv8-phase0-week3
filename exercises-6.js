function reverseNumber(num) {
  var numStr = num.toString();
  var result = '';

  for(var i = numStr.length -1; i >= 0; i--) {
    result += numStr[i];
  }
  return result;
}

function showPalindrome(num) { // Param: 117
  var numResult = num; // 117

  if(num < 10) { // 117 Not < 10 (FALSE)
    numResult += 1;
    return numResult + ' - Palindrome';

  } else {

    numResult += 1; // 117 + 1 = 118
    if(reverseNumber(numResult) === numResult.toString()) { // '811' === '118' // FALSE
      return numResult + ' - Palindrome';
    } else {
      // Not palindrome
      return showPalindrome(numResult);
    }
  }
}

// TEST CASES
console.log(showPalindrome(8)); // 9
console.log(showPalindrome(10)); // 11
console.log(showPalindrome(117)); // 121
console.log(showPalindrome(175)); // 181
console.log(showPalindrome(1000)); // 1001
