import styled from 'styled-components';

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

export const Button = styled.button`
  width: 100%;
  color: #fff;
  height: 80px;
  display: flex;
  font-size: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const CardContainer = styled.div`
  top: 0;
  opacity: 0;
  width: 100%;
  height: 280px;
  max-height: 80px;
  border-radius: 16px;
  background-color: #fff;
  transition: all 0.3s ease;
  &.active {
    opacity: 1;
    z-index: 10;
    max-height: 280px;
    position: absolute;
  }
`;
