const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const puerto = process.env.PUERTO || 3000;

const rutaArchivoJson = path.join(__dirname, "datos.json");

app.get("/", (req, res) => {
 res.send("API - Rest Aprendices");
});

app.get("/api/aprendices", (req, res) => {

 fs.readFile(rutaArchivoJson, "utf-8", (error, datos) => {

 if (error) {
 return res.json({
 Error: "No se puede leer los datos."
 });
 }

 const listaAprendices = JSON.parse(datos);

 res.json(listaAprendices);
 });
});

app.listen(puerto, () => {
 console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});