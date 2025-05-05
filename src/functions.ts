import { Cittadino, Startup, Incentivo } from './classes.js'

export function verificaCriteriCittadino(cittadino: Cittadino, incentivo: Incentivo): boolean {
    return incentivo.criteriEleggibilta.every(criterio => criterio.verificaCittadino?.(cittadino));
}

export function verificaCriteriStartup(startup: Startup, incentivo: Incentivo): boolean {
    return incentivo.criteriEleggibilta.every(criterio => criterio.verificaStartup?.(startup));
}
