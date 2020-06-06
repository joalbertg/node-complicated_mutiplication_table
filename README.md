# Complicated Multiplication Table

### Installs

* Without `package.json`.
```shell
yarn add yargs colors
yarn add nodemon --dev
```

* With `package.json` and packages added.

> run `yarn install`

### With `Docker`
```shell
docker-compose run app yarn add yargs colors
docker-compose run app yarn add nodemon --dev
```

### Structure

run `tree -I "node_modules|screenshots"`
```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── file-outputs
│   └── default-table.txt
├── package.json
├── src
│   ├── app.js
│   ├── config
│   │   ├── index.js
│   │   └── yargs.js
│   ├── decorators
│   │   ├── header.js
│   │   └── index.js
│   ├── services
│   │   ├── file-system
│   │   │   ├── index.js
│   │   │   └── write-file.js
│   │   ├── generators
│   │   │   ├── by-base.js
│   │   │   ├── default.js
│   │   │   ├── index.js
│   │   │   └── row.js
│   │   ├── index.js
│   │   └── multiplication.js
│   └── validations
│       ├── index.js
│       └── validations.js
└── yarn.lock

8 directories, 21 files
```

### Screenshots

<p align="center">
  <kbd>
    <img src="screenshots/show-table.png" title="show table"  width="400px" height="auto">
  </kbd>
</p>

### Help

> run `docker-compose run app node src/app --help`
```shell
app [command]

Commands:
  app list    Imprime en terminal la tabla de Multiplicar.
  app create  Crea un archivo con la tabla de Multiplicar por
              defecto o especifico a la base.

Options:
  --version  Show version number                           [boolean]
  --help     Show help                                     [boolean]
```

> run `docker-compose run app node src/app create --help`
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

> run `docker-compose run app node src/app list --help`
```shell
app list

Imprime en consola la tabla de Multiplicar.

Options:
  --version    Show version number                                   [boolean]
  --help       Show help                                             [boolean]
  --base, -b                                                        [required]
  --limit, -l                                                    [default: 10]
```

* command list

> run `docker-compose run app node src/app list -l 10 -b 7`
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

* command create

> run `docker-compose run app node src/app create`, this generate a default file.
```shell
Archivo creado: El archivo ha sido creado.
```

