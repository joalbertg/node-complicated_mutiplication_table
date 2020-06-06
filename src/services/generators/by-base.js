const { validateLimit } = require('../../validations');

const byBase = (data, base, limit = 10) => {
  limit = validateLimit(limit);
  for (let i = 0; i < limit; i++)
    data += `${base} * ${i} = ${i * base}\n`;
  return data.brightMagenta;
}

module.exports = {
  byBase
};

