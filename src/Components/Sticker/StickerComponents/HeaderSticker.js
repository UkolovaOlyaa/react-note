import React, { useContext } from 'react';
import { ImgOnButton } from './ImgOnButton';
import { SelectOnSticker } from './SelectOnSticker';
import styled from 'styled-components';
import { UniversalButton } from '../../Button/UniversalButton';
import { StickerContext } from '../../Context/StickerContext';

const StyledHeaderSticker = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
`;
export const HeaderSticker = ({ id, color, handleColorChange, onEdit }) => {

    const onDelete = useContext(StickerContext);
    return (
        <StyledHeaderSticker>
            <SelectOnSticker value={color} onChange={handleColorChange} />
            <UniversalButton onClick={onEdit}>
                <ImgOnButton src="https://img.icons8.com/?size=100&id=hfbQucF0HUDf&format=png&color=000000"/>
            </UniversalButton>
            <UniversalButton onClick={() => onDelete(id)}>
                <ImgOnButton src="https://img.icons8.com/?size=100&id=98131&format=png&color=000000"/>
            </UniversalButton>
        </StyledHeaderSticker>
    );
};
