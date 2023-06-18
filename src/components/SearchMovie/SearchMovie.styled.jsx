import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
    font-size: 16px;
    padding: 8px 36px 8px 12px;
    width: 260px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #0f1926;
    outline: none;
  }
`;

export const Icon = styled(FcSearch)`
  width: 28px;
  height: 28px;
  position: relative;
  right: 56px;
  z-index: 1;
  opacity: 0.6;
`;
