import styled, { css } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const sizes = css`
  width: 100%;
  height: 48px;
  font-size: 16px;
  padding: 12px 16px;
`;

const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputStyles = css`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.text}1A;
  &:focus-visible {
    outline: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 0px;
  overflow: hidden;
  position: relative;
  &.active {
    min-height: 180px;
    margin-bottom: 16px;
  }
`;

export const CardContainer = styled.div`
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  max-height: 80px;
  padding: 16px 24px;
  border-radius: 16px;
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.25s ease;
  &.active {
    opacity: 1;
    z-index: 10;
    max-height: none;
    min-height: 280px;
  }
`;

export const InputWrapper = styled.div`
  ${centerFlex}
  justify-content: space-between;
`;

export const Input = styled.input`
  ${sizes}
  ${inputStyles}
`;

export const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  margin-left: 8px;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  ${sizes}
  height: 100% !important;
  ${inputStyles}
`;

export const Button = styled.button`
  ${sizes}
  width: auto;
  opacity: 0.7;
  font-weight: bold;
  border-radius: 4px;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 1;
  }
`;
