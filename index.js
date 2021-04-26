const express= require("express")

const app = express();

// configuracion de la app
const PORT = process.env.PORT || 3000;
// definir una ruta para nuestra app
app.get('/', (req, res) => {
  res.send('hola')
} ) ;
// decirle al server que escuche peticiones en el puerto 3000
app.listen(PORT);
