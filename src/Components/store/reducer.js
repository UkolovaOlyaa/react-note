import * as t from './actionType';

const savedStickers = sessionStorage.getItem('stickersCount');
const initialState = JSON.parse(savedStickers) || [];

export const reducer = (state = initialState, action) => {
    let newState;
    switch(action.type){
        case t.DELETE_STICKER:
            newState = state.filter(sticker => sticker.id !== action.payload);
            break;
        case t.ADD_STICKER:
            newState = [action.payload, ...state];
            break;
        case t.UPDATE_STICKER:
            const { id, ...updates } = action.payload;
            newState = state.map(sticker => sticker.id === id ? { ...sticker, ...updates } : sticker);
            break;
        default: 
            return state;
    }
    sessionStorage.setItem('stickersCount', JSON.stringify(newState));
    return newState;
}

