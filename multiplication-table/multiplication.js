const fs = require('fs');

const generateRow = (num, str) => {
  for (let j = 1; j < 10; j++)
    str += `${j} * ${num} = ${j * num}\t`;
  return str += '\n';
}

const generateDefault = data => {
  for (let i = 0; i < 10; i++)
    data = generateRow(i, data);
  return data;
}

const generateByNum = (data, num) => {
  for (let i = 0; i < 10; i++)
    data += `${num} * ${i} = ${i * num}\n`;
  return data;
}

const generateColumn = (data, num) => {
  return num ? generateByNum(data, num) : generateDefault(data);
}

const createFile = (data, fileName) => {
  fs.writeFile(`table/${fileName}.txt`, data, error => {
    if (error) throw error;
  });
  return 'El archivo ha sido creado.';
}

const generateTable = (num = null) => {
  return new Promise((resolve, reject) => {
    if (num && !Number(num)) {
      throw new Error(`Parameter ${num} is not a Number.`);
    }

    let table = generateColumn('', num);
    fileName = num ? `table-${num}` : 'default-table';
    resolve(createFile(table, fileName));
  });
}

module.exports = {
  generateTable
};

