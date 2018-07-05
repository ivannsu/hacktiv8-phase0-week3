var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 0, 'Pria');

  console.log(input);

  var dateTime = input[3].split('/');
  var month;

  switch (parseInt(dateTime[1])) {
    case 01:
      month = 'Januari';
      break;
    case 02:
      month = 'Februari';
      break;
    case 03:
      month = 'Maret';
      break;
    case 04:
      month = 'April';
      break;
    case 05:
      month = 'Mei';
      break;
    case 06:
      month = 'Juni';
      break;
    case 07:
      month = 'Juli';
      break;
    case 08:
      month = 'Agustus';
      break;
    case 09:
      month = 'September';
      break;
    case 10:
      month = 'Oktober';
      break;
    case 11:
      month = 'November';
      break;
    case 12:
      month = 'Desember';
      break;
    default:
  }
  console.log(month);

  var newDateTime = dateTime.sort(function(val1, val2) {
    return val1 > val2;
  });
  var joinedDateTime = newDateTime.join('-');

  console.log(newDateTime);
  console.log(joinedDateTime);

  var max15char = input[1].slice(0, 15);
  console.log(max15char);
}

dataHandling2(input);
