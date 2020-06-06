const fs = require('fs');

const createFile = (data, fileName) => {
  fs.writeFile(`./file-outputs/${fileName}.txt`, data, error => {
    if (error) throw error;
  });
  return 'El archivo ha sido creado.';
}

module.exports = {
  createFile
};

