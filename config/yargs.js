const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por completar', {
        descripcion
    })
    .command('actualizar', 'Actualiza a completado una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}