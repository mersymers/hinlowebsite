import styled from 'styled-components';


export const ServiceWrapper = styled.div`
max-width: 1200px;
margin: 0 auto; 
`

export const ServiceRow = styled.div`
display: flex;
flex-wrap: wrap;
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

`
