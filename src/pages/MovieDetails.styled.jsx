import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;

  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 30px;
`;

export const Image = styled.img`
  max-height: 520px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  align-self: flex-start;
`;

export const Description = styled.div`
  flex: 1 1 auto;
`;

export const ProdCompany = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10px;
`;