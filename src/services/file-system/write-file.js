const fs = require('fs');

const createFile = (data, fileName) => {
  const uri = `./file-outputs/${fileName}.txt`;
  fs.writeFileSync(uri, data, error => {
    if (error) throw error;
  });
  return uri;
}

module.exports = {
  createFile
};

