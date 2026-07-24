import express from 'express'

const app = express();  
const port = 3000; 

app.get("/", (_, res) => { 
    res.send('servidor esxpress ficha 3401781 '); 
});
    
app.listen(port, () => { console.log( `Servidor en funcionamiento en el puerto: `); 

});