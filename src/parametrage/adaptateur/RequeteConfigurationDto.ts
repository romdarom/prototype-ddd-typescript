import { EtablissementDto } from "./EtablissementDto"
import { AutorisationDto } from "./AutorisationDto"

export interface RequeteConfigurationDto {
    etablissement: EtablissementDto
    autorisations: AutorisationDto[]
}
