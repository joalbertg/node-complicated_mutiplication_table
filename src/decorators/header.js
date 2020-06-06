const colors = require('colors');

const { listTable, createTable } = require('../services');

const header = base => {
  console.log('******************************'.green);
  console.log(`****MULTIPLICATION TABLE ${base}****`.green);
  console.log('******************************'.green);
};

const list = (base, limit) => {
  header(base);
  listTable(base, limit)
    .then(console.log)
    .catch(error => console.error(error.message));
}

const create = (base, limit) => {
  createTable(base, limit)
    .then(resp => console.log(`${'Archivo creado:'.red} ${resp.green}`))
    .catch(error => console.error(error.message));
}

module.exports = {
  list,
  create
};

