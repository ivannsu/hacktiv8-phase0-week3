Competencies: Pseudocode

Buatlah Pseudocode untuk kasus berikut:
Sebuah perahu layar sedang melaju dengan kecepatan 30km/jam
Perahu tersebut dipengaruhi oleh kecepatan ombak yang berlawanan dengan arah lain

- Jika ombak dibawah 1 meter maka kecepatan tetap.
- Jika ombak setinggi 1 meter maka kecepatan akan berkurang sebesar 7km/jam
- Jika ombak setinggi 2 meter maka kecepatan akan berkurang sebesar 15km/jam
- Jika ombak lebih tinggi daripada 2 meter maka perahu akan terbalik, sehingga kecepatan menjadi 0km/jam

Tampilkan kecepatan perahu jika di depan ada ombak setinggi 1 meter

// Answer
STORE `kecepatan perahu` with 30km/jam
STORE `ombak` with 1m
STORE `result` without value

IF `ombak` LESS THAN 1m
  DISPLAY `kecepatan perahu`;

ELSE IF `ombak` EQUAL with 1m
  CALCULATE `kecepatan perahu` minus `7km/jam`
  SET `result` with calculate result
  DISPLAY `result`

ELSE IF `ombak` EQUAL with 2m
  CALCULATE `kecepatan perahu` minus `15km/jam`
  SET `result` with calculate result
  DISPLAY `result`

ELSE IF `ombak` GREATER THAN 2m
  SET `result` with 0km/jam
  DISPLAY `result`
  
ENDIF;
