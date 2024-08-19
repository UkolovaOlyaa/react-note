import * as t from "./actionType";

const savedStickers = sessionStorage.getItem("stickers");

const initialState = {
  stickers: savedStickers ? JSON.parse(savedStickers) : [],
  editingStickerId: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.DELETE_STICKER:
      return {
        ...state,
        stickers: state.stickers.filter(
          (sticker) => sticker.id !== action.payload
        ),
      };
    case t.ADD_STICKER:
      return {
        ...state,
        stickers: [action.payload, ...state.stickers],
      };
    case t.UPDATE_STICKER:
      const { id, ...updates } = action.payload;
      return {
        ...state,
        stickers: state.stickers.map((sticker) =>
          sticker.id === id ? { ...sticker, ...updates } : sticker
        ),
      };
    case t.EDITING_STICKER_ID:
      return {
        ...state,
        editingStickerId: action.payload,
      };
    default:
      return state;
  }
};
