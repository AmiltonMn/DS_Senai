import express from 'express';
import router from './routes/routes.js'

const app = express();
const port = 8080;

router(app)
app.listen(port, 
    () => console.log(`Acesse: http://localhost:${port}/`)
);

app.get('/getTeste', (req, res) => {
    res.send('GET: Requisição recebida com sucesso!');
}); 