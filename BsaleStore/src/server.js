require("../config/conection");
const express = require("express");
const app = express();
const port = 3000;

//config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//servidor escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo de pana en http://localhost:${port}`);
});

app.use(require('../routes/category.route'))

module.exports = app;
