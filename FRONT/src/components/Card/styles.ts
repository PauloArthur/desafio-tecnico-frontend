import styled, { css } from 'styled-components';
import { FaEdit } from 'react-icons/fa';
import { FaArrowRight, FaArrowLeft, FaTrash } from 'react-icons/fa6';

export const CardContainer = styled.div`
  width: 100%;
  min-height: 180px;
  padding: 16px 32px;
  margin-bottom: 16px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  padding: 16px 0;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div``;

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
  ${iconStyles};
`;

export const ArrowRightIcon = styled(FaArrowRight)`
  ${iconStyles}
`;

export const ArrowLeftIcon = styled(FaArrowLeft)`
  ${iconStyles}
`;
