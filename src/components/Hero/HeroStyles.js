import styled from 'styled-components';

export const Img = styled.img`
width: 220px; 
height: 220px; 
object-fit: cover;
object-position: 0% 35%; 
border-radius: 50%;
margin: 0 0.5em;
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
