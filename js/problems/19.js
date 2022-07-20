const getMonthDays = (month, isLeap) => {
  let days;
  switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      days = 31;
      break;
    case 2:
      days = isLeap ? 29 : 28;
      break;
    default:
      days = 30;
  }
  return days;
};

const isLeap = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const getMothCalendar = (year, month) => {
  let days = 0;
  for (let y = 1900; y < year; y++) {
    for (let m = 1; m <= 12; m++) {
      days += getMonthDays(m, isLeap(y))
    }
  }
  const isLeapYear = isLeap(year);
  for (let m = 1; m < month; m++) {
    days += getMonthDays(m, isLeapYear)
  }
  const startingDay = (days % 7) + 1;
  const calendar = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
  const monthDays = getMonthDays(month, isLeapYear);
  for (let i = startingDay; i <= monthDays + startingDay; i++) {
    calendar[(i % 7) || 7]++;
  }
  return calendar;
};

console.log(getMothCalendar(2022, 7));

