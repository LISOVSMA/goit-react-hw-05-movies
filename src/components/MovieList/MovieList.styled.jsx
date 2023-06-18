import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  font-size: 20px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding: 6px 12px;
  position: relative;
`;

export const LinkDetails = styled(Link)`
  color: #0f1926;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #cd1839;
  }
`;
