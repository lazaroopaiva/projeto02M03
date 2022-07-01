const { models } = require('mongoose');
const Tarefa = require('../models/Tarefas');

const findAllTarefaServices = async () => {
  const tarefas = await Tarefa.find();
  console.log(tarefas);
  return tarefas;
};

const findByIdtarefaServices = async (Id) => {
  const oneTarefa = await Tarefa.findById(Id);
  return oneTarefa;
};

const createTarefaServices = async (novaTarefa) => {
  const createdTarefa = await Tarefa.create(novaTarefa);
  return createdTarefa;
};

const updatetarefaServices = async (id, tarefaEditada) => {
  const updateTarefa = await Tarefa.findByIdAndUpdate(id, tarefaEditada);
  return updateTarefa;
};

const deleteTarefaServices = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

module.exports = {
  findAllTarefaServices,
  findByIdtarefaServices,
  createTarefaServices,
  updatetarefaServices,
  deleteTarefaServices,
};
