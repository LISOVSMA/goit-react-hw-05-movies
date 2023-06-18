import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const Item = styled.li`
  margin-top: 15px;
  img {
    border-radius: 3px;
  }
`;
