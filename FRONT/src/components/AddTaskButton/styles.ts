import styled, { css } from 'styled-components';
const centerFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const NewTaskCardTrigger = styled.button`
  ${centerFlex}
  width: 100%;
  color: #fff;
  height: 80px;
  font-size: 32px;
  border-radius: 16px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
