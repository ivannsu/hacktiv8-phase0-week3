/*
Competencies: Function and Conditionals

Instruksi
-------------------------------
Dalam suaru antrian terdapat 3 loket pelayanan
Loket A akan melayani pelanggan dengan nomor urut 1, 4, 7, 10
Loket B akan melayani pelanggan dengan nomor urut 2, 5, 8, 11
Loket C akan melayani pelanggan dengan nomor urut 3, 6, 9, 12

Dan pada antrian ini hanya ada 12 antrian.

Jika nomor antrian lebih besar dari 12 atau lebih kecil dari 1, maka tampilkan "Nomor antrian invalid"

Buatlah function loketPelayan yang menerima input berupa nomor antrian dan
mengembalikan Loket yang akan memberikan pelayanan.
Note:
- function locketPelayanan hanya menerima 1 parameter berupa angka
- gunakan conditional, dapat berupa if-else atau switch-case statement
*/

function loketPelayan(nomorUrut) {
  var result;

  if(nomorUrut > 12 || nomorUrut < 1) {
    return 'Nomor antrian invalid';
  }

  switch (nomorUrut) {
    case 1:
    case 4:
    case 7:
    case 10:
      result = 'A';
      break;

    case 2:
    case 5:
    case 8:
    case 11:
      result = 'B';
      break;

    case 3:
    case 6:
    case 9:
    case 12:
      result = 'C';
      break;
  }

  return result;
}

console.log(loketPelayan(1)); // Layanan Loket A
console.log(loketPelayan(5)); // Layanan Loket B
console.log(loketPelayan(6)); // Layanan Loket C
