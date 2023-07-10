const express = require("express");
const hbs = require("hbs");
const yargs = require('yargs');

const app = express();

//llamos al index.html
app.use(express.static('public'));

//Configuracion hbs
app.set('view engine', 'hbs');


/*
2. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario para el ingreso
de la URL de la imagen a tratar.
*/
app.get("/", (req, res) => {
      res.render("main", { tasks });
});


/*
1. El servidor debe ser levantado por instrucción de una aplicación Node que use el paquete Yargs
para capturar los argumentos en la línea de comando.Se deberá ejecutar el comando para levantar
el servidor solo si el valor de la propiedad“ key” es la correcta(123).
*/
// Obtener los argumentos de la línea de comandos
const argv = yargs.argv;

// Verificar el valor de la propiedad "key"
if (argv.key === 123) {
  // Se levanta el servidor solo si la key es correcta
  const port = 3200;
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}.`);
  });
} else {
  console.log('La key es incorrecta. No se puede levantar el servidor.');
}