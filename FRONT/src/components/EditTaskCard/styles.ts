import styled, { css } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const sizes = css`
  width: 100%;
  height: 48px;
  font-size: 16px;
  padding: 8px 16px;
`;

const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputStyles = css`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.05);
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
  transition: all 0.3s ease;
  &.active {
    max-height: 280px;
    margin-bottom: 16px;
  }
`;

export const CardContainer = styled.div`
  top: 0;
  opacity: 0;
  width: 100%;
  padding: 16px;
  height: 280px;
  max-height: 80px;
  border-radius: 16px;
  z-index: -1;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  transition: all 0.3s ease;
  &.active {
    opacity: 1;
    z-index: 10;
    max-height: 280px;
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
  height: auto;
  ${inputStyles}
`;

export const Button = styled.button`
  ${sizes}
  width: auto;
  color: #fff;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
