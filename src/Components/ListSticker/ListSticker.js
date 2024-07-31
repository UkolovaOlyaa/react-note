import { useContext } from "react";
import { Sticker } from "../Sticker/Sticker"
import styled from "styled-components"
import { StickerContext } from "../Context/StickerContext";

const StyledListSticker = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const ListSticker = ({stickersCount}) => {
    const onDelete = useContext(StickerContext);
    return(
        <StyledListSticker>
            {stickersCount.map((sticker) =>
                <Sticker key={sticker.id} id={sticker.id} onDelete={() => onDelete(sticker.id)}/>
            )}
        </StyledListSticker>
    )
}