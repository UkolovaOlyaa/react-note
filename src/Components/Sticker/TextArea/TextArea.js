import { useDispatch, useSelector } from "react-redux";
import "./TextArea.css";
import { updateSticker } from "../../Store/actionCreator";

export const TextArea = ({ fullClassName, inputRef, id }) => {
    
    const dispatch = useDispatch();
    const stickers = useSelector((state) => state.sticker)
    const currentSticker = stickers.find(sticker => sticker.id === id); 

    const handleTextChange = (event) => {
        let currentText = event.target.value;
        const wordLimit = 50;
        if (currentText.length > wordLimit) {
            currentText = currentText.slice(0, wordLimit);
        }
        dispatch(updateSticker(id, { text: currentText }));
    };
    
    return (
        <textarea
            value={currentSticker.text}
            onChange={handleTextChange}
            className={fullClassName}
            ref={inputRef} 
        />
    );
};
