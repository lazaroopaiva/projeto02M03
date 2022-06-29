const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/tarefas-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`mongoDB conectado!`))
    .catch((error) =>
      console.log(`erro ao conectar com o mongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
