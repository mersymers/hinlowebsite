import styled from 'styled-components';



export const ServiceLeftColumn = styled.div`
float: left;
width: 30%;
margin-left:2rem;
margin-bottom: 5rem;
padding: 0 8px;
box-sizing: border-box;

@media screen and (max-width: 650px) {
    width: 100%;
    display: block;
  }
`

export const SLDiv = styled.div`
// `

export const ServicesHrLines = styled.div`
position: relative;
text-align: left;
text-indent: 7rem;;
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
  left: -3rem;
}

&::after {
  right: 1rem;
}
`;

export const SLTextDiv = styled.div`
align-items: center;
`

export const SLText = styled.p`
font-size: 3rem;
color: black;
vertical-align: middle;
`;
