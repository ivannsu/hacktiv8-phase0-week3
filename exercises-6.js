function showPalindrome(num) {

  if(num < 10) {
    num += 1;
    return num;

  } else {
    num += 1;

    var numStr = num.toString();
    var result = '';

    for(var i = numStr.length -1; i >= 0; i--) {
      result += numStr[i];
    }

    if(result === num.toString()) {
      return num;
    } else {
      return showPalindrome(num);
    }

  }
}

// TEST CASES
console.log(showPalindrome(8)); // 9
console.log(showPalindrome(10)); // 11
console.log(showPalindrome(117)); // 121
console.log(showPalindrome(175)); // 181
console.log(showPalindrome(1000)); // 1001
