
export type Acte = string;
export type Finalisable = boolean;

export interface AutorisationDto {
    acte: Acte
    entraineFinalisation: Finalisable
}