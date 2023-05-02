import styled from 'styled-components';

export const FooterLeftColumn = styled.div`
  flex-basis: 33%;
  text-align: center;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
  
  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;

export const FLDiv = styled.div`
margin-left: 20%;
`

export const FLIconDiv = styled.div`
margin-left: 40%;
display: flex;
align-items: center;
`

export const FLImgDiv = styled.div`

`
export const FLImg = styled.img`
width:100%;
`

export const FLText = styled.p`

`
export const FLIcons = styled.div`
margin-right: 2rem;
`
