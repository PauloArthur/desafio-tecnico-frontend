import styled, { css } from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft, FaTrash } from 'react-icons/fa6';

export const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &.active {
    min-height: 280px;
    margin-bottom: 16px;
  }
`;

export const TitleWrapper = styled.div`
  height: 80px;
  display: flex;
  padding: 16px 0;
  font-size: 24px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  min-height: 210px;
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    .actionsWrapper,
    .deleteIcon {
      opacity: 1;
    }
  }
`;

export const ActionsWrapper = styled.div`
  opacity: 0;
  display: flex;
  padding: 16px 0;
  transition: all 0.3s ease;
  justify-content: space-between;
`;

const iconStyles = css`
  font-size: 24px;
  cursor: pointer;
`;

export const EditIcon = styled(FaEdit)`
  margin-left: 8px;
  ${iconStyles}
`;

export const DeleteIcon = styled(FaTrash)`
  color: red;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${iconStyles};
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  ${iconStyles}
`;

export const ArrowLeftIcon = styled(FaArrowLeft)`
  ${iconStyles}
`;
