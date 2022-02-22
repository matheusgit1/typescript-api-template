import express, { Request, response } from "express";
import cors from 'cors'
import morgan from 'morgan'
import routes from './Routes'

class App {

  public express: express.Application;

  public constructor() {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
    this.express.use(morgan("dev"))
  }

  public routes(): void {
    this.express.use(routes)
  }

  private database(): void {

  }
}

export default new App().express;