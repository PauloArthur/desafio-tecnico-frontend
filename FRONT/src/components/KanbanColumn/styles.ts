import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  padding: 24px 24px 0;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ListContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
