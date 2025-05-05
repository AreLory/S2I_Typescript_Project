export function verificaCriteriCittadino(cittadino, incentivo) {
    return incentivo.criteriEleggibilta.every(criterio => { var _a; return (_a = criterio.verificaCittadino) === null || _a === void 0 ? void 0 : _a.call(criterio, cittadino); });
}
export function verificaCriteriStartup(startup, incentivo) {
    return incentivo.criteriEleggibilta.every(criterio => { var _a; return (_a = criterio.verificaStartup) === null || _a === void 0 ? void 0 : _a.call(criterio, startup); });
}
