import express from "express";
import helmet from "helmet";
import http from "http";
import { ResourceParametrage as EndpointParametrage } from "./parametrage/adaptateur/ResourceParametrage";
import { ServiceParametrage } from "./parametrage/application/ServiceParametrage";
import { InMemActeRepository } from "./parametrage/port/InMemActeRepository";
import { PredictionService } from "./prediction/application/PredictionService";
import Bus from "./shared/domain/event/EventBus";



export class App {
    app: express.Application;
    resourceEndpoint: EndpointParametrage;

    constructor() {
        this.app = express()
        this.app.use(helmet());
        this.app.use(express.json());

        const eventBus = Bus()
        this.resourceEndpoint = new EndpointParametrage(this.app, new ServiceParametrage(eventBus, new InMemActeRepository()))
        new PredictionService(eventBus);
        http.createServer(this.app).listen(3000, () => console.log("server listening"))
    }
}

export default new App()
