import { EtablissementDto } from "../adaptateur/EtablissementDto";
import { AutorisationDto } from "../adaptateur/AutorisationDto";
import { ActeRepository } from "../port/ActeRepository";

export class ServiceParametrage {

    actesRepository: ActeRepository;
    eventBus: any;

    constructor(eventBus: any, actesRepository: ActeRepository) {
        this.actesRepository = actesRepository
        this.eventBus = eventBus
    }
    parametrerActes(etablissement: EtablissementDto, autorisations: AutorisationDto[]) {
        this.actesRepository.update(etablissement, autorisations);
        // emit domain event
        this.eventBus.healthFacilityConfiguredEvent({ etablissement, autorisations })
        return true;
    }

    listerConfiguration(etablissementId: EtablissementDto) {
        return this.actesRepository.find(etablissementId)
    }

}