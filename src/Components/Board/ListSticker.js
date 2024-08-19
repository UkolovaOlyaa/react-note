import { Sticker } from "../Sticker/Sticker";
import styled from "styled-components";

const StyledListSticker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ListSticker = ({ stickers }) => {
  return (
    <StyledListSticker>
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          id={sticker.id}
          color={sticker.color}
          text={sticker.text}
        />
      ))}
    </StyledListSticker>
  );
};
