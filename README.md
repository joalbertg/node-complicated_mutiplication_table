# Complicated Multiplication Table

### Installs

* Without `package.json`.
```shell
yarn add yargs colors
yarn add nodemon --dev
```

* With `package.json` and packages added.

run `yarn install`

### With `Docker`
```shell
docker-compose run app yarn add yargs colors
docker-compose run app yarn add nodemon --dev
```

### Structure

run `tree -I "node_modules"`
```shell
.
├── Dockerfile
├── README.md
├── app.js
├── config
│   ├── index.js
│   └── yargs.js
├── docker-compose.yml
├── multiplication-table
│   ├── index.js
│   └── multiplication.js
├── package.json
├── screenshots
│   └── show-table.png
├── table
│   └── default-table.txt
└── yarn.lock

4 directories, 12 files
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

### list command

run `node app list -l 10 -b 7` or `docker-compose run app node app list -l 10 -b 7`
```shell
******************************
****MULTIPLICATION TABLE 7****
******************************
7 * 0 = 0
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
```

### Screenshots

<p align="center">
  <kbd>
    <img src="screenshots/show-table.png" title="show table"  width="400px" height="auto">
  </kbd>
</p>

