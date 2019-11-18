import { SET_SHEET_OPTIONS } from '../actions/sheetOptions';

const defaultState = {
    notes : true,
    price : true,
    images : true,
    info : true,
    ratings : true
}

export const sheetOptions = (state = defaultState, action) => {
    switch(action.type){
        case SET_SHEET_OPTIONS:
            return {...state, [action.key]: !state[action.key]}
        default:
            return state;
    }
}