const colors = require('colors');

const { argv } = require('./config');
const { createTable, listTable } = require('./services');
const { list, create } = require('./decorators');

// Antes de yargs
//console.log(process.argv);
//const argv = process.argv;
// $>node index --base=3 => '--base=3'.split('=') => ['--base', '3']
//const parameter = argv[2].split('=')[1];

// $>node index create
//argv => { _: [ 'create' ], '$0': 'app' }
const command = argv._[0];
//console.log(argv);

const actions = {
  LIST: 'list',
  CREATE: 'create'
};

switch (command) {
  case actions.LIST:
    list(argv.base, argv.limit);
    break;
  case actions.CREATE:
    create(argv.base, argv.limit);
    break;
  default:
    console.log('Command not found.'.red);
}

