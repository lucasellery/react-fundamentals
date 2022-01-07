import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.postBackgroundColor};
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background: #c1c1cf;
    color: #000;
  }

  h2 {
    margin: 0 0 8px;
  }
  small {
    opacity: 0.7;
  }
  & + article {
    margin-top: 8px;
  }
`;