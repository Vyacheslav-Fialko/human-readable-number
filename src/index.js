module.exports = function toReadable(number) {
  let res = ' ';
  let num = number;
  if (num > 99) {
    res += numToWord(num.toString()[0]) + ' hundred ';
    if (number % 100 === 0) {
      return res.trim();
    } else {
      num = num % 100;
    }
  }

  if(num > 19 && num < 100) {
    res += numDecToWord(num.toString()[0]) + ' ';
    if(num % 10 === 0) {
      return res.trim();
    } else {
      num = num % 10;
    }
  }
  res += numToWord(num.toString());

  return res.trim();
}

function numDecToWord(str) {
  switch (str) {
    case '2':
      return 'twenty';
    case '3':
      return 'thirty';
    case '4':
      return 'forty';
    case '5':
      return 'fifty';
    case '6':
      return 'sixty';
    case '7':
      return 'seventy';
    case '8':
      return 'eighty';
    case '9':
      return 'ninety';
    default:
      break;
  }
}
function numToWord(str) {
  switch (str) {
    case '0':
      return 'zero';
    case '1':
      return 'one';
    case '2':
      return 'two';
    case '3':
      return 'three';
    case '4':
      return 'four';
    case '5':
      return 'five';
    case '6':
      return 'six';
    case '7':
      return 'seven';
    case '8':
      return 'eight';
    case '9':
      return 'nine';
    case '10':
      return 'ten';
    case '11':
      return 'eleven';
    case '12':
      return 'twelve';
    case '13':
      return 'thirteen';
    case '14':
      return 'fourteen';
    case '15':
      return 'fifteen';
    case '16':
      return 'sixteen';
    case '17':
      return 'seventeen';
    case '18':
      return 'eighteen';
    case '19':
      return 'nineteen';
    default:
      break;
  }
}
