import styled from 'styled-components';

export const NavbarHeader = styled.header`
  z-index: 20;
  width: 100%;
  height: 90px;
  display: flex;
  padding: 0 20px;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`;
