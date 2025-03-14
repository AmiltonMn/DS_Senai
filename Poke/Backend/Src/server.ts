import express from 'express';
import initRoutes from './Routes/routes'

const app = express();

import cors from 'cors';
app.use(cors());
const port = 8080;

initRoutes(app);
app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));