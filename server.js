const express = require("express");
//The route that leads to the supermarket routes
const supermarketRoutes = require('./src/conexiones/routes');

const app = express();
const port = 3000;

app.use(express.json());

//This path is where whe will save the supermarket routes
app.use('/api/v1/supermarket', supermarketRoutes);

app.listen(port, () => console.log(`app  listening on port ${port}`))
