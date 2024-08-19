import styled from "styled-components";
import { Button } from "../../Board/Button";

const StyledHeaderSticker = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
`;

const StyledImgOnButton = styled.img`
  width: 35px;
  outline: none;
`;

const StyledSelector = styled.select`
  background-color: transparent;
  border: none;
  outline: none;
  color: black;
  margin-right: 80px;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderSticker = ({ onChange, color, onEdit, onDelete }) => {
  return (
    <StyledHeaderSticker>
      <StyledSelector value={color} onChange={onChange}>
        <option value="violet">Violet</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="gray">Gray</option>
      </StyledSelector>
      <Button onClick={onEdit}>
        <StyledImgOnButton
          src="https://img.icons8.com/?size=100&id=hfbQucF0HUDf&format=png&color=000000"
          alt="edit"
        />
      </Button>
      <Button onClick={onDelete}>
        <StyledImgOnButton
          src="https://img.icons8.com/?size=100&id=98131&format=png&color=000000"
          alt="remove"
        />
      </Button>
    </StyledHeaderSticker>
  );
};
