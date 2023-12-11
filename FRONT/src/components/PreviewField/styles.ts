import styled, { css } from 'styled-components';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';

const iconStyles = css`
  font-size: 24px;
  cursor: pointer;
`;
const absoluteStyles = css`
  top: 0;
  position: absolute;
`;

export const HidePreviewIcon = styled(FaEye)`
  ${iconStyles}
`;
export const ShowPreviewIcon = styled(FaRegEyeSlash)`
  ${iconStyles}
`;

export const Container = styled.div`
  height: 100%;
  margin-bottom: 16px;
  position: relative;
`;

export const IconWrapper = styled.div`
  right: 0;
  z-index: 100;
  padding: 8px;
  cursor: pointer;
  ${absoluteStyles}
`;
export const PreviewWrapper = styled.div`
  width: 100%;
  opacity: 0;
  z-index: -1;
  height: 100%;
  ${absoluteStyles}
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.3s ease;
  &.active {
    z-index: 10;
    opacity: 1;
  }
`;
