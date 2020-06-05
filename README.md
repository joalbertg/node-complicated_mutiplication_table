# Complicated Multiplication Table

### Installs

* Without `package.json`.
run `npm install yargs`
run `npm install colors --save`

* With `package.json` and packages added.
run `npm install`

### Structure

run `tree`
```shell
.
├── README.md
├── app.js
├── config
│   ├── index.js
│   └── yargs.js
├── multiplication-table
│   ├── index.js
│   └── multiplication.js
├── package-lock.json
├── package.json
└── table
    └── default-table.txt

3 directories, 9 files
```

### Help

run `node app --help`
```shell
app [command]

Commands:
  app list    Imprime en consola la table de Multiplicar.
  app create  Crea un archivo con la tabla de Multiplicar por
              defecto o especifico a la base.

Options:
  --version  Show version number                           [boolean]
  --help     Show help                                     [boolean]
```
run `node app create --help`
```shell
app create

Crea un archivo con la tabla de Multiplicar por defecto o especifico
a la base.

Options:
  --version    Show version number                         [boolean]
  --help       Show help                                   [boolean]
  --base, -b
  --limit, -l                                          [default: 10]
```

