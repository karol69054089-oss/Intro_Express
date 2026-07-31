import express from 'express'
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express();  
const port = process.env.port || 3000;

app.get("/", function (req, res){ 
    res.send("Aprendiendo express, ficha 3407181, ADSO en el sena 31 de Julio "); 
});

//otro endpoint
    
app.listen(port, () => { console.log( `Servidor en funcionamiento en el puerto: ${port} `); 

});