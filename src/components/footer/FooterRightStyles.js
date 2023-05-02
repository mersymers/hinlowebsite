import styled from 'styled-components';


export const FooterRightColumn = styled.div`
flex-basis: 33%;
padding: 0 1rem;
text-align: center;
right: 0;
top: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 50px;

@media (max-width: 768px) {
  flex-basis: 100%;
}

@media (max-width: 576px) {
  flex-basis: 100%;
  margin-bottom: 1.5rem;
}
`;

export const FRDiv = styled.div`
display: flex;
align-items: center;
margin-bottom: 0rem;
margin-left: 0.5rem;
margin-right: 0.5rem;
`

export const FRText = styled.p`
margin-bottom: 0.5rem;
`

export const FRHeader = styled.h2`
display: flex;
margin-right: 20%;
`

export const FRIconDiv = styled.div`
margin-right: 0.5rem;
margin-top: 0.75rem;
`