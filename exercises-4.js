var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 0, 'Pria');
  input.splice(5, 1, 'SMA Internasional Metro');

  console.log(input);

  var dateTime = input[3].split('/');
  var dateTimeArray = [];
  var dateTimeSorted;
  var dateTimeJoined;

  for(var i = 0; i < dateTime.length; i++) {
    var result = parseInt(dateTime[i]);
    dateTimeArray.push(result);
  }

  switch (dateTimeArray[1]) {
    case 1:
      month = 'Januari';
      break;
    case 2:
      month = 'Februari';
      break;
    case 3:
      month = 'Maret';
      break;
    case 4:
      month = 'April';
      break;
    case 5:
      month = 'Mei';
      break;
    case 6:
      month = 'Juni';
      break;
    case 7:
      month = 'Juli';
      break;
    case 8:
      month = 'Agustus';
      break;
    case 9:
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

  dateTimeResult = dateTimeArray.sort(function(val1, val2) {
    return val1 < val2;
  });
  console.log(dateTimeResult);

  dateTimeJoined = dateTime.join('-');
  console.log(dateTimeJoined);

  var max15char = input[1].slice(0, 15);
  console.log(max15char);
}

dataHandling2(input);
