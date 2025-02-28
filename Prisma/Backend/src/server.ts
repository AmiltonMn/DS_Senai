import express from 'express';
import initRoutes from './routes/routes.ts'
import connectDB from './database/database.ts';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: '*', // Permite apenas requisições desta origem
    })
);
const port = 8080;

connectDB();
initRoutes(app);
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));