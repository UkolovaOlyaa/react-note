import React, { useEffect, useState } from 'react';
import { ListSticker } from "./Components/Board/ListSticker";
import { MainButton } from './Components/Board/MainButton';
import { useSelector } from 'react-redux';

export const App = () => {
    const stickersCount = useSelector((state) => state.sticker)
    const [isAllowed, setIsAllowed] = useState(true);

    useEffect(() => {
        setIsAllowed(stickersCount.length < 10);
    }, [stickersCount]); 

    return (
        <>
            <MainButton isAllowed={isAllowed}>+ Add note</MainButton>
            <ListSticker stickersCount={stickersCount} />
        </>
    );
};
