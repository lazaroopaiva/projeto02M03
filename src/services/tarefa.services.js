const findAllTarefaServices = () => {
  return tarefas;
};

const findByIdtarefaServices = (Id) => {
  return tarefas.find((tarefa) => tarefa.id == Id);
};

const createTarefaServices = (novaTarefa) => {
  const newId = tarefas.length + 1;
  novaTarefa.id = newId;
  tarefas.push(novaTarefa);
  return novaTarefa;
};

const updatetarefaServices = (id, tarefaEditada) => {
  tarefaEditada['id'] = id;
  const tarefasIndex = terefa.findIndex((tarefa) => tarefa.id == id);
  tarefas[tarefasIndex] = tarefaEditada;
  return tarefaEditada;
};

const deleteTarefaServices = (id) => {
  const tarefaIndex = tarefas.findiIndex((tarefa) => tarefa.id == id);
  return tarefas.splice(tarefaIndex, 1);
};

module.exports = {
  findAllTarefaServices,
  findByIdtarefaServices,
  createTarefaServices,
  updatetarefaServices,
  deleteTarefaServices,
};
