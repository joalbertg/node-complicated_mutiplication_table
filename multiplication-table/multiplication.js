const fs = require('fs');
const colors = require('colors');

const generateRow = (base, str) => {
  for (let j = 1; j < 10; j++)
    str += `${j} * ${base} = ${j * base}\t`;
  return str += '\n';
}

const validateLimit = limit => {
  if (limit === 0)
    return 10;
  return limit;
}

const generateDefault = (data, limit) => {
  limit = validateLimit(limit);
  for (let i = 0; i < limit; i++)
    data = generateRow(i, data);
  return data;
}

const generateByBase = (data, base, limit = 10) => {
  limit = validateLimit(limit);
  for (let i = 0; i < limit; i++)
    data += `${base} * ${i} = ${i * base}\n`;
  return data.brightMagenta;
}

const generateColumn = (data, base, limit) => {
  return base ? generateByBase(data, base, limit) : generateDefault(data, limit);
}

const createFile = (data, fileName) => {
  fs.writeFile(`table/${fileName}.txt`, data, error => {
    if (error) throw error;
  });
  return 'El archivo ha sido creado.';
}

const error_validate = noNum => {
  return new Error(`Parameter ${noNum} is not a Number.`);
};

const validates = (base, limit) => {
  if (base && !Number(base)) {
    throw error_validate(base);
  } else if (limit && !Number(limit)) {
    throw error_validate(limit);
  }
}

const createTable = (base = null, limit = 10) => {
  return new Promise(resolve => {
    validates(base, limit);

    let table = generateColumn('', base, limit);
    fileName = base ? `table-${base}` : 'default-table';
    resolve(createFile(table, fileName));
  });
}

const header = base => {
  console.log('******************************'.green);
  console.log(`****MULTIPLICATION TABLE ${base}****`.green);
  console.log('******************************'.green);
};

const listTable = (base, limit) => {
  return new Promise(resolve => {
    validates(base, limit);
    header(base);
    resolve(generateByBase('', base, limit));
  });
}

module.exports = {
  createTable,
  listTable
};

