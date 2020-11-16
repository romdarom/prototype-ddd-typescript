import express from "express";

import { RequeteConfigurationDto } from "./RequeteConfigurationDto"
import { ServiceParametrage } from "../application/ServiceParametrage"
import { EtablissementDto, Platform } from "./EtablissementDto";

export class ResourceParametrage {
    serviceParametrage: ServiceParametrage;


    constructor(server: express.Application, service: ServiceParametrage) {
        this.serviceParametrage = service;
        server.post("/configuration/etablissement/acte", this.postNewConfiguration.bind(this))
        server.get("/configuration/etablissement/list", this.listConfigurations.bind(this))
    }

    async postNewConfiguration(request: express.Request, reponse: express.Response) {
        const requete = request.body as RequeteConfigurationDto;

        if (this.serviceParametrage.parametrerActes(requete.etablissement, requete.autorisations)) {
            return reponse.json({ response: "some response" })
        }
        else {
            return reponse.status(500).json({ description: "sorry, you lose" })
        }
    }

    async listConfigurations(request: express.Request, reponse: express.Response) {


        const etablissement: EtablissementDto = {
            platform: request.query.platform as string,
            oid: request.query.oid as string,
            cml: request.query.cml as string

        }

        const configuration = this.serviceParametrage.listerConfiguration(etablissement)
        if (configuration === undefined) {
            return reponse.status(500).json({ description: "sorry, you lose. No configuration found for the following facility: " + JSON.stringify(etablissement) })
        }

        reponse.json(configuration)
    }

}