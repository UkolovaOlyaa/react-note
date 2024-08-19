import React, { useState, useRef, useEffect } from "react";
import "./Sticker.css";
import { TextArea } from "./TextArea/TextArea";
import { HeaderSticker } from "./HeaderSticker/HeaderSticker";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSticker,
  editingStickerId,
  updateSticker,
} from "../store/actionCreator";

export const Sticker = ({ id, text, color }) => {
  const stickers = useSelector((state) => state.sticker.stickers);
  const dispatch = useDispatch();
  const getEditingStickerId = useSelector(
    (state) => state.sticker.editingStickerId
  );

  const [isEditing, setIsEditing] = useState(getEditingStickerId === id);
  const inputRef = useRef(null);

  useEffect(() => {
    setIsEditing(getEditingStickerId === id);
    if (isEditing && getEditingStickerId === id) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [getEditingStickerId, id, isEditing]);

  const onEdit = () => {
    if (isEditing) {
      dispatch(editingStickerId(null));
      setIsEditing(false);
    } else {
      dispatch(editingStickerId(id));
      setIsEditing(true);
    }
  };

  const removeStickerHandler = () => {
    dispatch(deleteSticker(id));
    sessionStorage.removeItem(id);
  };

  const handleTextChange = (event) => {
    let currentText = event.target.value;
    dispatch(updateSticker(id, { text: currentText }));
    sessionStorage.setItem("stickers", JSON.stringify(stickers));
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    dispatch(updateSticker(id, { color: newColor }));
    sessionStorage.setItem("stickers", JSON.stringify(stickers));
  };

  return (
    <div className={`sticker sticker-${color}`}>
      <HeaderSticker
        onEdit={onEdit}
        onDelete={removeStickerHandler}
        onChange={handleColorChange}
        color={color}
        id={id}
      />
      <TextArea
        inputRef={inputRef}
        fullClassName={
          !isEditing
            ? `sticker__text-area sticker-${color}-text`
            : `sticker__text-area`
        }
        text={text}
        onChange={handleTextChange}
        color={color}
        disabled={!isEditing}
      />
    </div>
  );
};
