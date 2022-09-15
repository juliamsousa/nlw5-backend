import express, { json } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';
import { routes } from './routes';

const app = express();

// cria protocolo http
const http = createServer(app);
// cria ws server
const io = new Server(http);

app.use(express.json());
app.use(routes);

app.listen (3333);
