import { verificaCriteriCittadino, verificaCriteriStartup } from './functions.js';
// CLASSI
export class Startup {
    constructor(nome, settore, descrizione, prodottiServizi) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.prodottiServizi = prodottiServizi;
    }
    riceviIncentivo(incentivo) {
        if (verificaCriteriStartup(this, incentivo)) {
            console.log(`${this.nome} (${this.descrizione}) ha ricevuto un incentivo: ${incentivo.id}, del valore di ${'€' + incentivo.valoreInc}. Descrizione:${incentivo.descrizione}`);
        }
        else {
            console.log(`${this.nome} Non idoneo all'incentivo: ${incentivo.id}`);
        }
    }
}
export class Incentivo {
    constructor(id, descrizione, valoreInc, criteriEleggibilita) {
        this.id = id;
        this.descrizione = descrizione;
        this.valoreInc = valoreInc;
        this.criteriEleggibilta = criteriEleggibilita;
    }
    assegnaAStartup(startup) {
        if (verificaCriteriStartup(startup, this)) {
            console.log(`Assegnazione dell'incentivo ${this.id} a ${startup.nome} del valore di €${this.valoreInc}. Descrizione: ${this.descrizione}`);
        }
        else {
            console.log(`Incentivo ${this.id} non assegnabile a ${startup.nome}`);
        }
    }
}
export class Cittadino {
    partecipaAttività(startup) {
        console.log(`${this.nome + ' ' + this.cognome} partecipa all'attività: ${startup.prodottiServizi} organizzata da ${startup.nome}`);
    }
    riceviBonus(incentivo) {
        if (verificaCriteriCittadino(this, incentivo)) {
            console.log(`${this.nome + ' ' + this.cognome} ha ricevuto il Bonus ${incentivo.id}`);
        }
        else {
            console.log(`${this.nome + ' ' + this.cognome} non soddisfa i requisiti per ricevere ${incentivo.id}`);
        }
    }
    constructor(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
}
export class Criterio {
    constructor(tipo, valore) {
        this.tipo = tipo;
        this.valore = valore;
    }
    verificaCittadino(cittadino) {
        switch (this.tipo) {
            case "etaMassima":
                return cittadino.eta <= this.valore;
            case 'etaMinima':
                return cittadino.eta >= this.valore;
            case 'interesseSportivo':
                return cittadino.interessiSportivi.includes(this.valore);
            default:
                return false;
        }
    }
    verificaStartup(startup) {
        switch (this.tipo) {
            case "settoreStartup":
                return startup.settore === this.valore;
            default:
                return false;
        }
    }
}
