import styled, { css } from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

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
  height: 80px;
  border-radius: 16px;
  flex-direction: column;
  opacity: 0.3;
  transition: opacity 0.3s ease;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
export const AddTaskIcon = styled(CiCirclePlus)`
  font-size: 48px;
  stroke-width: 1px;
  color: ${({ theme }) => theme.colors.background};
`;
