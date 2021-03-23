const express = require('express');
const app = express();
const port = 3000;

//config
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ruotes
app.use('/', (req, res) => {
    try {
        res.status(200).send('Saludos desde el servidor');
    } catch (error) {
        res.status(500).send('error al cargar el sevidor');
    }
})



//servidor escuchando
app.listen(port, () => {
    console.log(`Servidor corriendo de pana en http://localhost:${port}`)
});