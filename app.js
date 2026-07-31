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
app.get("/otraruta", (req, res)=>{
    //usando template string
    res.send(`<h1>Otro ejemplo de ruta</h1
        <h2>End point con res.send</h2>
     `)
})
    
//otro endpoint
app.get("/ruta2", (req, res)=>{
    res.json({"nombre": "Karol", "Apellido": "Rivera", "Cargo": "Aprendiz" })
     
})
  
//otro endpoint
app.get("/ruta3/:aprendiz/:otrodato", (req, res)=>{
  const dato_aprendiz = req.params.aprendiz
  const otro_dato = req.params.otrodato
    res.json({"nombre": dato_aprendiz, "apellido": otro_dato})
    

     
})
  
app.get("/ruta4", (req, res)=>{
    //capturar el parametro de la consulta query
    const orden = req.query.orden || "sin ordenar"
    const pagina = req.query.pagina || 1 
    res.send(`<h1> Listado Aprendices</h1>
        <p>El listado esta en orden ${orden}</p>
        <p> Pagina: ${pagina}</p>
        `)
})



app.listen(port, function(){ 
    console.log( `Servidor: http://localhost:  ${port} `); 

});