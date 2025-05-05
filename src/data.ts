import { Startup, Cittadino, Criterio, Incentivo } from './classes.js'

//Startup (Nome, Settore, Descrizione, ProdottiServizi)
export const listaStartup = [
    new Startup('AbbaPinetoVolley', 'Volley', 'Associazione Sportiva', ['Corso di pallavolo']),
    new Startup('Athena', 'Fitness', 'Palestra', ['Abbonamento sala pesi', 'Corso di danza', 'pilates'])
]


//cittadini (Nome, Cognome, Età, Interessi)
export const listaCittadini: Cittadino[] = [
    new Cittadino('Luca', 'Rossi', 48, ['Golf', 'Basket', 'Tennis']),
    new Cittadino('Marco', 'Bianchi', 16, ['Pallavolo', 'Calcio', 'Tennis']),
    new Cittadino('Riccardo', 'Esposito', 9, ['Calcio'])
]

// Criteri (Tipo, Valore)
export const listaCriteri: Criterio[] = [
    new Criterio('settoreStartup', 'Volley'),
    new Criterio('settoreStartup', 'Basket'),
    new Criterio('settoreStartup', 'Golf'),
    new Criterio('etaMassima', 14),
    new Criterio('etaMassima', 26),
    new Criterio('etaMinima', 6),
    new Criterio('interesseSportivo', 'Calcio'),
    new Criterio('interesseSportivo', 'Basket'),
    new Criterio('settoreStartup', 'Fitness'),
    new Criterio('ISEE', '€15.000-€25.000'),
    new Criterio('BonusElettrico', 300)
]

//incentivi (ID, Descrizione, Valore, Criteri)
export const listaIncentivi: Incentivo[] = [
    new Incentivo('INC001', 'Incentivo per attrezzature sportive', 1500, [listaCriteri[0]]),
    new Incentivo('BNS001', 'Bonus: giovani in salute', 200, [listaCriteri[4]]),
    new Incentivo('BNS002', 'Bonus nuovi atleti', 120, [listaCriteri[3], listaCriteri[5], listaCriteri[6]]),
    new Incentivo('INC002', 'Incentivo per nuove palestre', 12500, [listaCriteri[8]])
]

