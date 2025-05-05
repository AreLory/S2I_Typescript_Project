import { listaCittadini, listaIncentivi, listaStartup } from './data.js'
import { verificaCriteriCittadino, verificaCriteriStartup } from './functions.js'

listaCittadini.forEach(cittadino => {
    listaIncentivi.forEach(incentivo => {
        if (verificaCriteriCittadino(cittadino, incentivo)) {
            console.log(`${cittadino.nome} è idoneo per l'incentivo ${incentivo.id}`)
            cittadino.riceviBonus(incentivo);
        }
    })
})

listaStartup.forEach(startup => {
    listaIncentivi.forEach(incentivo => {
        if (verificaCriteriStartup(startup, incentivo)) {
            console.log(`${startup.nome} è idonea per l'incentivo ${incentivo.id}`);
            startup.riceviIncentivo(incentivo);

        }
    })
})



listaIncentivi.forEach(incentivo => {
    listaStartup.forEach(startup => {
        if (verificaCriteriStartup(startup, incentivo)) {
            incentivo.assegnaAStartup(startup)
        }
    })
})

