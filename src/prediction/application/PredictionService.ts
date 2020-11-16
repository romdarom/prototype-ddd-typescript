import { Acte } from "../../parametrage/adaptateur/AutorisationDto";
import { EtablissementConfigureEvent } from "../../shared/domain/event/EtablissementConfigureEvent";

export class PredictionService {

    constructor(eventBus: any) {
        eventBus.healthFacilityConfiguredEvent.on((domainEvent: EtablissementConfigureEvent) => {
            const actes: Acte[] = domainEvent.autorisations.map(autorisation => autorisation.acte)
            console.log("event emitted: " + actes)

        })
    }
}