const tarefaServices = require('../services/tarefa.services');
const findAllTarefaController = (req, res) => {
  const tarefas = tarefaServices.findAllTarefaServices();
  res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
  const parametroId = req.params.id;
  const escolhaTarefa = tarefaServices.findByIdtarefaServices(parametroId);
  res.send(escolhaTarefa);
};

const createtarefaController = (req, res) => {
  const tarefa = req.body;
  const novaTarefa = tarefaServices.createTarefaServices(tarefa);
  res.send(novaTarefa);
};

const updateTarefaController = (req, res) => {
  const idParam = +req.params.id;
  const tarefaEditada = req.body;
  const updateTarefa = tarefaServices.updatetarefaServices(
    idParam,
    tarefaEditada,
  );
  res.send(updateTarefa);
};

const deletetarefaController = (req, res) => {
  const idParam = req.params.id;
  tarefaServices.deleteTarefaServices(idParam);
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findAllTarefaController,
  findByIdTarefaController,
  createtarefaController,
  updateTarefaController,
  deletetarefaController,
};
