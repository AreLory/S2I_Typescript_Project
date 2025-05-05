import { IStartup, IIncentivo, ICittadino, ICriteri } from './interface.js'
import { verificaCriteriCittadino, verificaCriteriStartup } from './functions.js'

// CLASSI
export class Startup implements IStartup {
    nome: string
    settore: string
    descrizione: string
    prodottiServizi: string[]

    constructor(nome: string, settore: string, descrizione: string, prodottiServizi: string[]) {
        this.nome = nome
        this.settore = settore
        this.descrizione = descrizione
        this.prodottiServizi = prodottiServizi
    }
    riceviIncentivo(incentivo: Incentivo): void {
        if (verificaCriteriStartup(this, incentivo)) {
            console.log(`${this.nome} (${this.descrizione}) ha ricevuto un incentivo: ${incentivo.id}, del valore di ${'€' + incentivo.valoreInc}. Descrizione:${incentivo.descrizione}`)
        } else {
            console.log(`${this.nome} Non idoneo all'incentivo: ${incentivo.id}`)
        }
    }
}
export class Incentivo implements IIncentivo {
    id: string
    descrizione: string
    valoreInc: number
    criteriEleggibilta: Criterio[]

    constructor(id: string, descrizione: string, valoreInc: number, criteriEleggibilita: Criterio[]) {
        this.id = id;
        this.descrizione = descrizione;
        this.valoreInc = valoreInc;
        this.criteriEleggibilta = criteriEleggibilita;
    }
    assegnaAStartup(startup: Startup): void {
        if (verificaCriteriStartup(startup, this)) {
            console.log(`Assegnazione dell'incentivo ${this.id} a ${startup.nome} del valore di €${this.valoreInc}. Descrizione: ${this.descrizione}`)
        } else {
            console.log(`Incentivo ${this.id} non assegnabile a ${startup.nome}`)
        }
    }
}

export class Cittadino implements ICittadino {
    nome: string
    cognome: string
    eta: number
    interessiSportivi: string[]

    partecipaAttività(startup: IStartup): void {

        console.log(`${this.nome + ' ' + this.cognome} partecipa all'attività: ${startup.prodottiServizi} organizzata da ${startup.nome}`)

    }
    riceviBonus(incentivo: Incentivo): void {
        if (verificaCriteriCittadino(this, incentivo)) {
            console.log(`${this.nome + ' ' + this.cognome} ha ricevuto il Bonus ${incentivo.id}`)
        } else {
            console.log(`${this.nome + ' ' + this.cognome} non soddisfa i requisiti per ricevere ${incentivo.id}`)
        }
    }
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi
    }

}

export class Criterio implements ICriteri {
    tipo: "etaMassima" | "etaMinima" | "interesseSportivo" | "settoreStartup" | 'ISEE' | 'BonusGas' | 'BonusElettrico' | 'BonusIdrico'
    valore: any

    constructor(tipo: "etaMassima" | "etaMinima" | "interesseSportivo" | "settoreStartup" | 'ISEE' | 'BonusGas' | 'BonusElettrico' | 'BonusIdrico', valore: any) {
        this.tipo = tipo
        this.valore = valore
    }
    verificaCittadino(cittadino: Cittadino): boolean {
        switch (this.tipo) {
            case "etaMassima":
                return cittadino.eta <= this.valore
            case 'etaMinima':
                return cittadino.eta >= this.valore
            case 'interesseSportivo':
                return cittadino.interessiSportivi.includes(this.valore)
            default:
                return false
        }
    }

    verificaStartup(startup: Startup): boolean {
        switch (this.tipo) {
            case "settoreStartup":
                return startup.settore === this.valore
            default:
                return false
        }
    }
}
