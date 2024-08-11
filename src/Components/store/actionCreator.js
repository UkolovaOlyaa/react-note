import * as t from './actionType'

export const deleteSticker = (id) => ({
    type: t.DELETE_STICKER,
    payload: id
});

export const addSticker = () => ({
    type: t.ADD_STICKER,
    payload: { 
        id: Date.now(),
        text: '',
        color: 'violet',
    }
});

export const updateSticker = (id, updates) => ({
    type: t.UPDATE_STICKER,
    payload: {
        id,
        ...updates,
    }
});