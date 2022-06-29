const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/tarefa.routes');
const connectToDatabase = require('./src/database/bd');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/tarefas/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
