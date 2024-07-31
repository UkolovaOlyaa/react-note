import React, {useEffect, useState, useRef} from "react";
import "./Sticker.css"
import { TextArea } from "./StickerComponents/TextArea";
import { HeaderSticker } from "./StickerComponents/HeaderSticker";

export const Sticker = ({id}) => {
    const [text, setText] = useState('');
    const [color, setColor] = useState('violet'); 
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const savedSticker = sessionStorage.getItem(id);

        if(savedSticker) {
            const { text: savedText, color: savedColor } = JSON.parse(savedSticker);
            setText(savedText || '');
            setColor(savedColor || 'violet');
        }
    }, [id]);

    const handleTextChange = (event) => {
        let currentText = event.target.value;
        const wordLimit = 50;
        if (currentText.length > wordLimit) {
            currentText = currentText.slice(0, wordLimit);
        }
        setText(currentText);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const onEdit = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            inputRef.current.focus();
            inputRef.current.readOnly = false; 
        } else {
            inputRef.current.readOnly = true; 
        }
    };

    const stickerClass = `sticker-${color}`;
    const stickerClassText = `sticker-${color}-text`;

    const textAreaClassName = !isEditing ? `sticker__text-area ${stickerClassText}` : `sticker__text-area`;

    useEffect(() => {
        const data = { text, color };
        
        sessionStorage.setItem(id, JSON.stringify(data));
    }, [text, color, id]);
    
    return (
        <div className={`sticker ${stickerClass}`}>
            <HeaderSticker 
                color={color} 
                handleColorChange={handleColorChange} 
                onEdit={onEdit} 
                id={id}
            />
            <TextArea 
                value={text} 
                onChange={handleTextChange} 
                fullClassName={textAreaClassName}
                inputRef={inputRef}
            />
        </div>
    )
}

