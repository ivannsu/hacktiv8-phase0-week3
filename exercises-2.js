// Tantangan Array 1 (Mengakses Nilai dalam Array)
function balikString(text) {

  var i;
  var result = '';

  for(i = text.length; i > 0; i--) {
    result += text[i-1];
  }
  return result;
}

console.log(balikString('hello'));
