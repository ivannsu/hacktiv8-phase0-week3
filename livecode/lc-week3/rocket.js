// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *
contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)

function drawSymbolicColsBox(num) {
  var i = 1;
  var j = 1;
  var maxRange = num;

  while(i <= num) {
    var result = '';

    while(j <= maxRange) {
      if(j % 3 == 0) {
        result += '* ';
      } else if(j % 2 == 0) {
        result += '$ ';
      } else if(j % 2 == 1) {
        result += '@ ';
      }
      j++;
    }
    console.log(result);

    j += num;
    maxRange = j + num;

    i++;
  }


}
drawSymbolicColsBox(3);
// drawSymbolicColsBox(5);
// drawSymbolicColsBox(1);


// if(0 !== 0)
// timpa array untuk hasil
//
//
// -----
//
// var urutanSekarang = 1;
//
// for(var i = 0; i < nums; i++) {
//
//   var result = '';
//
//   for(var j = 0; j < nums; j++) {
//     if() {
//       result += '';
//     } else if() {
//       result += '';
//     } else if() {
//       result += '';
//     }
//   }
//
//   urutanSekarang++;
//
// }
