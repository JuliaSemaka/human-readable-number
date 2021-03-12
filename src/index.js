module.exports = function toReadable (number) {
  let toTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let toTwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let denary = ['ten', 'eleven', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';

  let str = '';
  if (number === 0) {
      return toTen[0];
  }
  if ( number >= 100) {
      str += `${toTen[String(number).slice(-3, -2)]} ${hundred} `;
  }
  let num = number % 100;
  if ( num ) {
    if (num >= 10 && num < 20) {
        str += toTwenty[String(num).slice(-1)];
    } else {
        if (num >= 20) {
            str += `${denary[String(num).slice(-2, -1)]} `;
        }
        if (String(num).slice(-1) != 0) {
            str += `${toTen[String(num).slice(-1)]}`;
        }
    }
  }
  return str.trim();
}
