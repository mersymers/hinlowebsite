import styled from 'styled-components';

export const FAQWrapper = styled.div`
max-width: 1200px;
margin: 0 auto; 
// background-color: #4287f5;
// color: #fff;
`;

export const FAQDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const FAQRow = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
padding-top: 1rem;

`

export const FAQHrLines = styled.div`
margin-top: 2rem;
position: relative;
text-align: left;
margin-left: 15rem;
color: orange;
font-style: italic;

&::before,
&::after {
  content: "";
  height: 2px;
  width: 130px;
  position: absolute;
  top: 50%;
  background: orange;
}

&::before {
  left: 5rem;
}

&::after {
  right: 62rem;
}
`;


export const FAQBorderedText = styled.p`
  font-size: 5rem;
  margin-right: 2rem;
  margin-top: 1rem;
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



export const FAQNonBorderedText = styled.div`
font-size: ${props => props.fontSize || '5rem'};
margin-top: 2rem;
margin-bottom: 0rem;
color: black;
display: inline-block;
vertical-align: middle;
`;

export const FAQTextDiv = styled.div`
display: flex;
align-items: left;
margin-left: 3rem;
margin-top: -2rem;
// margin-bottom: 0;
`

export const FAQText = styled.p`

`
export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;