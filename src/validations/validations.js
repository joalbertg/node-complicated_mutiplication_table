const LIMIT = 10;

const validateLimit = limit => {
  if (limit === 0)
    return LIMIT;
  return limit;
}

const isNumber = num => {
  if (num && !Number(num))
    throw new Error(`Parameter ${noNum} is not a Number.`);
}

module.exports = {
  validateLimit,
  isNumber
};

