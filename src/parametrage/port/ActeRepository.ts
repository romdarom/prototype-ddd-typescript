import { AutorisationDto } from "../adaptateur/AutorisationDto";
import { EtablissementDto } from "../adaptateur/EtablissementDto";


export interface ActeRepository {
    find(etablissementId: EtablissementDto): AutorisationDto[] | undefined;
    update(etablissement: EtablissementDto, autorisations: AutorisationDto[]): boolean;

}