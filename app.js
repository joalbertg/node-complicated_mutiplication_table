const { argv } = require('./config');
const { createTable, listTable } = require('./multiplication-table');

// Antes de yargs
//console.log(process.argv);
//const argv = process.argv;
// $>node index --base=3 => '--base=3'.split('=') => ['--base', '3']
//const parameter = argv[2].split('=')[1];

// $>node index create
//argv => { _: [ 'create' ], '$0': 'app' }
const command = argv._[0];

switch (command) {
  case 'list':
    listTable(argv.base | argv.b, argv.limit | argv.l)
      .then(console.log)
      .catch(error => console.error(error.message));
    break;
  case 'create':
    createTable(argv.base | argv.b, argv.limit | argv.l)
      .then(console.log)
      .catch(error => console.error(error.message));
    break;
  default:
    console.log('Command not found.');
}

