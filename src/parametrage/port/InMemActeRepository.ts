import { AutorisationDto } from "../adaptateur/AutorisationDto";
import { EtablissementDto } from "../adaptateur/EtablissementDto";
import { ActeRepository } from "./ActeRepository";



export class InMemActeRepository implements ActeRepository {
    store: Map<EtablissementDto, AutorisationDto[]>;


    constructor() {
        this.store = new Map()
    }
    find(etablissementId: EtablissementDto): (AutorisationDto[] | undefined) {

        return this.store.get(etablissementId)
    }

    update(etablissement: EtablissementDto, autorisations: AutorisationDto[]): boolean {
        this.store.set(etablissement, autorisations)
        return true
    }

}