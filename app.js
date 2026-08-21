import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint raíz exigido en el punto 3 y 5
app.get('/', (req, res) => {
    res.send('API Rest - Aprendices');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});