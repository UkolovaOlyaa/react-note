import { ImgOnButton } from './ImgOnButton';
import { SelectOnSticker } from './SelectOnSticker';
import styled from 'styled-components';
import { ButtonOnSticker } from './ButtonOnSticker';
import { useDispatch } from 'react-redux';
import { deleteSticker } from '../../Store/actionCreator';

const StyledHeaderSticker = styled.div`
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
`;
export const HeaderSticker = ({ id, onEdit }) => {
    
    const dispatch = useDispatch();
    
    const removeStickerHandler = (id) => {
        dispatch(deleteSticker(id));
        sessionStorage.removeItem(id);
    };

    return (
        <StyledHeaderSticker>
            <SelectOnSticker id={id}/>
            <ButtonOnSticker onClick={onEdit}>
                <ImgOnButton src="https://img.icons8.com/?size=100&id=hfbQucF0HUDf&format=png&color=000000" alt='edit'/>
            </ButtonOnSticker>
            <ButtonOnSticker onClick={() => removeStickerHandler(id)}>
                <ImgOnButton src="https://img.icons8.com/?size=100&id=98131&format=png&color=000000" alt='remove'/>
            </ButtonOnSticker>
        </StyledHeaderSticker>
    );
};
