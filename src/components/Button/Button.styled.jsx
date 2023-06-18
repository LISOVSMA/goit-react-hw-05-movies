import styled from '@emotion/styled';

export const Btn = styled.button`
  padding: 10px 18px;
  margin: 0 20px 20px 0;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  background-color: #0f1926;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0f1926;
    background-color: #cd1839;
  }
`;
