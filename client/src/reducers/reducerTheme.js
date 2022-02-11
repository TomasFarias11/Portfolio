import  {
    TEMA_CLARO,
    TRADUCCION_INGLES
} from '../actions/actionTheme.js'

const initialState = {
    temaClaro: false,
    ingles: false
}


export default function reducerTheme (state=initialState, action) {
    switch (action.type) {
        case TEMA_CLARO:
            return {
                ...state,
                temaClaro: action.payload
            }
        case TRADUCCION_INGLES:
            return {
                ...state,
                ingles: action.payload
            }
    default:
        return state;
    }
}