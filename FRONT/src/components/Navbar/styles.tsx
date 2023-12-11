import styled from 'styled-components';

export const NavbarHeader = styled.header`
  z-index: 20;
  width: 100%;
  height: 90px;
  display: flex;
  padding: 0 20px;
  position: relative;
  align-items: center;
  border-bottom: 1px solid;
  justify-content: flex-end;
`;

export const ToggleButton = styled.button`
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  appearance: none;
  position: relative;
  border-radius: 2rem;
  transition-property: all;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${({ theme }) => theme.colors.toggleButton};
  & > div {
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transform: translateX(0);
    color: ${({ theme }) => theme.colors.text};
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  &.checked > div {
    transform: translateX(3rem);
  }
`;
