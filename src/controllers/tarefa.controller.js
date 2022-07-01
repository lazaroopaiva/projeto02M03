const tarefaServices = require('../services/tarefa.services');
const mongoose = require('mongoose');

const findAllTarefaController = async (req, res) => {
  const tarefas = await tarefaServices.findAllTarefaServices();
  if (tarefas.length == 0) {
    return res
      .status(400)
      .send({ message: `Não existe nenhuma paleta cadastrada` });
  }
  res.send(tarefas);
};

const findByIdTarefaController = async (req, res) => {
  const parametroId = req.params.id;
  const escolhaTarefa = await tarefaServices.findByIdtarefaServices(
    parametroId,
  );
  if (!escolhaTarefa) {
    return res.status(400).send({ message: 'Essa tarefa não existe!' });
  }
  res.send(escolhaTarefa);
};

const createtarefaController = async (req, res) => {
  const tarefa = req.body;
  if (!tarefa || !tarefa.tarefa || !tarefa.descricao) {
    return res.status(400).send({ message: 'Envie os dois campos da tarefa!' });
  }
  const novaTarefa = await tarefaServices.createTarefaServices(tarefa);

  res.send(novaTarefa);
};

const updateTarefaController  = async (req, res) => {
  const idParam = req.params.id;
  const tarefaEditada = req.body;
  console.log();
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  if (!tarefaEditada || !tarefaEditada.tarefa || !tarefaEditada.descricao) {

    return res.status(400).send({ message: 'Envie os dois campos da tarefa!' });
  }

  const updateTarefa = await tarefaServices.updatetarefaServices(
    idParam,
    tarefaEditada,
  );
  console.log(updateTarefa);
  res.send(updateTarefa);
};

const deletetarefaController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    
    return res.status(400).send({ message: 'Id inválido' });
  
  }
  const escolhaTarefa = await tarefaServices.deleteTarefaServices(idParam);
  if (!escolhaTarefa) {
    return res.status(400).send({ message: 'Tarefa não Encontrada' });
  }
  res.send({ message: 'Tarefa deletada com sucesso!' });
};

module.exports = {
  findAllTarefaController,
  findByIdTarefaController,
  createtarefaController,
  updateTarefaController,
  deletetarefaController,
};
