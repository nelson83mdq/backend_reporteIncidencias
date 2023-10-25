'use strict'
import { Table } from "./middelware.js"

//var db = require('./database.js');
import { DataBase } from './database.js';

import express  from 'express';
//import { Database } from "sqlite3";
const app = express();
const PORT = 3000;

/*
app.get('/', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});*/

app.get('/pagina', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/', (peticion, respuesta) => {
    let t = new Table('as as as');

    let mascota = {
        status: 200,
        texto: "- texto de prueba -",
        tabla: t.All()
    };

    respuesta.json(mascota);
});

app.get('/a', (req, res) => {
    var sql = "SELECT * FROM brigadista";
    let db = new DataBase('Incidencias.db').bound_DB();
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(PORT, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${PORT}`);
});
/*
 * EJEMPLO DE USO ->
    $ node index.js
    *   ACCEDER A LOCALHOST:30000/ RECURSO
    *
 */