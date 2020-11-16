import { AutorisationDto } from "../../../parametrage/adaptateur/AutorisationDto"
import { EtablissementDto } from "../../../parametrage/adaptateur/EtablissementDto"


export interface EtablissementConfigureEvent { etablissement: EtablissementDto, autorisations: AutorisationDto[] }
