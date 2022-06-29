const route = require('express').Router();
const controllerTarefa = require('../controllers/tarefa.controller');

route.get('/todas-tarefa', controllerTarefa.findAllTarefaController);
route.get('/tarefa/:id', controllerTarefa.findByIdTarefaController);
route.post('/create', controllerTarefa.createtarefaController);
route.put('/update/:id', controllerTarefa.updateTarefaController);
route.delete('/delete/:id', controllerTarefa.deletetarefaController);

module.exports = route;

