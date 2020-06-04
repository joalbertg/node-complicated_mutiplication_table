const { generateTable } = require('./multiplication-table');

//console.log(process.argv);
const argv = process.argv;
// $>node index --base=3 => '--base=3'.split('=') => ['--base', '3']
const parameter = argv[2].split('=')[1];

generateTable(parameter)
  .then(console.log)
  .catch(error => console.error(error.message));

