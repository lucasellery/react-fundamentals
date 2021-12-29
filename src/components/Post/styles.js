import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;
  /* opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? '#F00' : '#f0f1f1'}; */

  ${({ removed }) => css`
    opacity: ${removed ? 0.5 : 1};
    color: ${removed ? '#F00' : '#f0f1f1'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
