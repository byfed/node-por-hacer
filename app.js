//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0].toLowerCase();
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("======== Por hacer =======".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("==========================".green);

        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log('El registro de actualizó');
        } else {
            console.log('El registro no se actualizó');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('El registro se borró');
        } else {
            console.log('El registro no se borró');
        }
        break;
    default:
        console.log('Comando no reconocido');

}