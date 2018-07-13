// Competencies: Loopings
/*
Competencies: Looping

=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height.
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
321
21
1
contoh 2 (height = 5):
54321
4321
321
21
1
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

function numberLadder(rows) {

  for(var i = rows + 1; i > 1; i--) {
    var result = '';

    for(var j = i; j > 1; j--) {
      result += j - 1;
    }
    console.log(result);
  }
}

numberLadder(5);

console.log('---');

numberLadder(3);

console.log('---');

numberLadder(1);
