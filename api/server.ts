import express from 'express';
import http from 'http';
import cors from 'cors';

import router from './routes/main';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/', router);
app.set('port', PORT);

export const server = http.createServer(app);
server.listen(PORT);

export default app