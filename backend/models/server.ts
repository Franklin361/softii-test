import express, { Application } from 'express';
import cors from 'cors';

import { paymentRouter } from '../router';

export class Server {
  private app: Application;
  private port: string;

  private apiPath = {
    payment: '/api/payment',
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.configRoutes();
  }

  configRoutes() {
    this.app.use(this.apiPath.payment, paymentRouter);
  }

  execute() {
    this.middlewares();
    this.app.listen(this.port, () =>
      console.log(`Server is running at http://localhost:${this.port} ✅`)
    );
  }
}
