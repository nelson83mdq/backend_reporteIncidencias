//var db = require('./database.js');

const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = 3000;
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
    let mascota = {
        status: 200,
        texto: "- texto de prueba -",
    };
    respuesta.json(mascota);
});
/*
app.get('/brigadistas', (req, res)=> {
    var sql = "select * from brigadista"
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

app.get('/', (req, res) => {
    var sql = "SELECT * FROM data"
    db.all(sql, [], (err, rows)=> {
        if (err) {
            res.status(400).json({"error ":err.message});
            return;
        } else {
            res.json({
                "message":"success",
                "data":rows,
                "total":1
            });
        }
    });
});
*/
// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});
/*
 * EJEMPLO DE USO ->
    $ node index.js
    *   ACCEDER A LOCALHOST:30000/ RECURSO
    *
 */