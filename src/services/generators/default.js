const { validateLimit } = require('../../validations');
const { row: generateRow } = require('./row');

const defaultTable = (data, limit) => {
  limit = validateLimit(limit);
  for (let i = 0; i < limit; i++)
    data = generateRow(i, data);
  return data;
}

module.exports = {
  defaultTable
};

