import styled from 'styled-components'

export const Button = styled.button`
    background: ${({ seatStatus }) => (seatStatus ? 'green' : 'red')};
    color: white;
    width: 20%;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
    margin: 10px 0px 10px 5%;
    border-radius:10px 10px 10px 10px;
    border: 2px solid transparent;

`;