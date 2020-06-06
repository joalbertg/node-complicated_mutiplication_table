const { createFile } = require('./file-system');
const { defaultTable, byBase } = require('./generators');
const { isNumber } = require('../validations');

const validatesNums = (base, limit) => {
  isNumber(base);
  isNumber(limit);
};

const generateColumn = (data, base, limit) => {
  return base ? byBase(data, base, limit) : defaultTable(data, limit);
}

const createTable = (base = null, limit = 10) => {
  return new Promise(resolve => {
    validatesNums(base, limit);

    let table = generateColumn('', base, limit);
    fileName = base ? `table-${base}` : 'default-table';
    resolve(createFile(table, fileName));
  });
}

const listTable = (base, limit) => {
  return new Promise(resolve => {
    validatesNums(base, limit);
    resolve(byBase('', base, limit));
  });
}

module.exports = {
  createTable,
  listTable
};

