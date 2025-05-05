export interface IStartup {
    nome: string,
    settore: string,
    descrizione: string,
    prodottiServizi: string[],
    riceviIncentivo(incentivo: IIncentivo): void
}

export interface IIncentivo {
    id: string,
    descrizione: string,
    valoreInc: number,
    criteriEleggibilta: ICriteri[]
    assegnaAStartup(startup: IStartup): void
}
export interface ICittadino {
    nome: string,
    cognome: string,
    eta: number,
    interessiSportivi: string[],
    partecipaAttività(startup: IStartup): void
    riceviBonus(incentivo: IIncentivo): void
}

export interface ICriteri {
    tipo: 'etaMassima' | 'etaMinima' | 'interesseSportivo' | 'settoreStartup' | 'ISEE' | 'BonusGas' | 'BonusElettrico' | 'BonusIdrico'
    valore: any

    verificaCittadino?(cittadino: ICittadino): boolean
    verificaStartup?(startup: IStartup): boolean
}
