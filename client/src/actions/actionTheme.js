

export const TRADUCCION_INGLES = "TRADUCCION_INGLES"
export const TEMA_CLARO = "TEMA_CLARO"

export function temaCambio (payload) {
        return ({
            type: TEMA_CLARO,
            payload
        })
}

export function traduccionIngles (payload) {
        return ({
            type: TRADUCCION_INGLES,
            payload
        })
}