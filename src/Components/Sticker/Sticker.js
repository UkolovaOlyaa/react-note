import React, { useState, useRef, useEffect} from "react";
import "./Sticker.css"
import { TextArea } from "./TextArea/TextArea";
import { HeaderSticker } from "./HeaderSticker/HeaderSticker";
import { useSelector } from "react-redux";

export const Sticker = ({id}) => {
    const stickers = useSelector((state) => state.sticker)
    const currentSticker = stickers.find(sticker => sticker.id === id); 
    
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.readOnly = true;
    }, []);

    const onEdit = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            inputRef.current.focus();
            inputRef.current.readOnly = false; 
        } else {
            inputRef.current.readOnly = true; 
        }
    };
    
    const stickerClass = `sticker-${currentSticker.color}`;
    const stickerClassText = `sticker-${currentSticker.color}-text`;

    const textAreaClassName = !isEditing ? `sticker__text-area ${stickerClassText}` : `sticker__text-area`;

    return (
        <div className={`sticker ${stickerClass}`}>
            <HeaderSticker  
                onEdit={onEdit} 
                id={id}
            />
            <TextArea 
                fullClassName={textAreaClassName}
                inputRef={inputRef}
                id={id}
            />
        </div>
    )
}
