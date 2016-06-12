const range = (a, b, step = 1) => {
  if (a > b) {
    throw new Error('Start value must be smaller than end.');
  }

  const rv = [];

  for (let i = a; i < b; i += step) {
    rv.push(i);
  }

  return rv;
};

module.exports = {range};
