import styled from 'styled-components';


export const PageWrapper = styled.div`

`

export const PageRow = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  @media (max-width: 576px) {
    flex-basis: 100%;
    margin-bottom: 1.5rem;
  }
`;


export const PageDiv = styled.div`

`


export const PageBorderedText = styled.p`
  font-size: 5rem;
  margin-top: 2rem;
  margin-bottom: 0rem;
  color: white;
  text-shadow:
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000;

  @supports((text-stroke: 2px black) or (-webkit-text-stroke: 2px black)) {
      color: transparent;
      -webkit-text-stroke: 2px black;
      text-stroke: 2px black;
      text-shadow: none;
  }
`;



export const PageNonBorderedText = styled.div`
font-size: ${props => props.fontSize || '5rem'};
margin-right: 2rem;
margin-top: 2rem;
margin-bottom: 0rem;
color: black;
display: inline-block;
vertical-align: middle;

`;

export const PageTextDiv = styled.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
`

export const PageTitleDiv = styled.div`
display: flex;
align-items: center;
margin-left: 1rem;
margin-bottom: 2rem;
`



export const PageDesDiv = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.5; /* Adjust the value to set the desired line spacing */
`

export const PageDesText = styled.p`

  text-align: center;
  text-justify: inter-word;
  line-height: 1.5;
`