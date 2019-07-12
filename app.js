const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log(colors.blue('Tarea por hacer: '), colors.green(tarea.descripcion));
            console.log(colors.blue('Estado: '), colors.green(tarea.completado));
            console.log(colors.red('================================'));
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado == true) {
            console.log('Elemento borrado');
        } else {
            console.log('Elemento no borrado');
        }
        break;

    default:
        console.log('Comando no es renococido');
}