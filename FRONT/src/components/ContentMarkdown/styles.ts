import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  max-height: 280px;
  padding: 8px 16px;
  border-radius: 4px;
  overflow: scroll;
  color: ${({ theme }) => theme.colors.text}E6;
  background-color: ${({ theme }) => theme.colors.text}1A;
`;
