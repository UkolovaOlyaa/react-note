import { Sticker } from "../Sticker/Sticker"
import styled from "styled-components"

const StyledListSticker = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

export const ListSticker = ({stickersCount}) => {
    return(
        <StyledListSticker>
            {stickersCount.map((sticker) =>
                <Sticker key={sticker.id} id={sticker.id} />
            )}
        </StyledListSticker>
    )
}