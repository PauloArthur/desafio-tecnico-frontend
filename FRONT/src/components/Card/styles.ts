import styled, { css } from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft, FaTrash } from 'react-icons/fa6';

export const CardContainer = styled.div`
  overflow: hidden;
  max-height: 500px;
  min-height: 210px;
  position: relative;
  margin-bottom: 16px;
  border-radius: 16px;
  transition: all 0.3s ease;
  &.active {
    min-height: 300px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) =>
    theme.colors.primary ?? theme.colors.background}CC;
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
  padding: 8px 0;
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
  opacity: 0;
  color: #e32636;
  transition: opacity 0.3s ease;
  ${iconStyles};
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  ${iconStyles}
`;

export const ArrowLeftIcon = styled(FaArrowLeft)`
  ${iconStyles}
`;
