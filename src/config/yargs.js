const opts = {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
};

const argv = require('yargs')
  .command('list', 'Imprime en consola la tabla de Multiplicar.', opts)
  .command('create', 'Crea un archivo con la tabla de Multiplicar por defecto o especifico a la base.', {
    ...opts,
    base: {demand: false, alias: 'b'}
  })
  .help()
  .argv;

module.exports = {
  argv
};

