import cors from 'cors';
import express, { json } from 'express';
import morgan from 'morgan';

import appRoutes from './app.routes';
import { ERROR_EXCEPTION } from './core/errors/notfound_handler.error';

const app = express();

app.use(cors());
app.use(json());

app.use(morgan("dev"));

app.use("/api", appRoutes);
app.use('*', ERROR_EXCEPTION.notFoundHandler)

export default app;
