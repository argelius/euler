const moment = require('moment');

let then = moment('19010101', 'YYYYMMDD');

let cnt = 0;

while (then.format('YYYY') !== '2001') {
  if (then.format('dddd') === 'Sunday' && then.format('Do') === '1st') {
    cnt++;
  }

  then = then.add(1, 'days');
}

console.log(cnt);
