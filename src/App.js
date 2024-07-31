import React, { useState, useEffect } from 'react';
import { ListSticker } from './Components/ListSticker/ListSticker';
import { UniversalButton } from './Components/Button/UniversalButton';
import { StickerContext } from './Components/Context/StickerContext';


export const App = () => {
    const [stickersCount, setStickersCount] = useState([]);
    const [isAllowed, setIsAllowed] = useState(true);
    
    useEffect(() => {
        const savedStickers = sessionStorage.getItem('stickersCount');

        if (savedStickers) {
            setStickersCount(JSON.parse(savedStickers));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('stickersCount', JSON.stringify(stickersCount));

        setIsAllowed(stickersCount.length < 10);
    }, [stickersCount]);

    const addSticker = () => {
        const newSticker = { id: Date.now()};
        setStickersCount(prevStrickers => [newSticker,...prevStrickers]);
    };

    const removeSticker = (id) => {
        setStickersCount(prevStrickers => prevStrickers.filter(sticker => sticker.id !== id));
        sessionStorage.removeItem(id);
    };

    return (
        <StickerContext.Provider value={removeSticker}>
            <UniversalButton mainButton isAllowed={isAllowed} onClick={addSticker} >+ Add note</UniversalButton>
            <ListSticker stickersCount={stickersCount}/>
        </StickerContext.Provider>
    );
}