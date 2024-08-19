import React, { useEffect } from "react";
import { ListSticker } from "./Components/Board/ListSticker";
import { Button } from "./Components/Board/Button";
import { useDispatch, useSelector } from "react-redux";
import { addSticker } from "./Components/store/actionCreator";

export const App = () => {
  const stickers = useSelector((state) => state.sticker.stickers);
  const dispatch = useDispatch();

  useEffect(() => {
    sessionStorage.setItem("stickers", JSON.stringify(stickers));
  }, [stickers]);

  const addStickerHandler = () => {
    if (stickers.length < 10) {
      dispatch(addSticker());
    }
  };

  return (
    <>
      <Button onClick={addStickerHandler} disabled={stickers.length < 10} main>
        + Add note
      </Button>
      <ListSticker stickers={stickers} />
    </>
  );
};
