export const getSundaysCount = (dateFrom, dateTo) => {
  const parseDate = date => `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}`;
  let parsedDate = parseDate(dateFrom);
  const parsedTo = parseDate(dateTo);

  const date = dateFrom;
  let sundaysCount = 0;
  while (parsedDate !== parsedTo) {
    if (date.getDate() === 1 && date.getDay() === 0) sundaysCount++;
    date.setDate(date.getDate() + 1);
    parsedDate = parseDate(date);
  }
  return sundaysCount;
};

export const ex19 = getSundaysCount.bind(this, new Date(1901, 1, 1), new Date(2000, 12, 31));
